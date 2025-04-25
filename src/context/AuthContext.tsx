import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{
    error: Error | null;
    data: Session | null;
  }>;
  signUp: (email: string, password: string, name: string) => Promise<{
    error: Error | null;
    data: Session | null;
  }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{
    error: Error | null;
    data: any;
  }>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 获取初始会话状态
    const getInitialSession = async () => {
      try {
        setLoading(true);
        
        // 检查当前会话
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);
        setUser(session?.user ?? null);
      } catch (error) {
        console.error('获取初始会话出错:', error);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    // 监听认证状态变化
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // 用户登录
  const signIn = async (email: string, password: string) => {
    try {
      // 测试账号直接模拟登录成功
      if (email === 'test@example.com' && password === 'password123') {
        console.log('使用测试账号登录');
        
        // 创建一个模拟的用户和会话
        const mockUser: User = {
          id: 'test-user-id',
          app_metadata: {},
          user_metadata: { name: '测试用户' },
          aud: 'authenticated',
          created_at: new Date().toISOString(),
          email: 'test@example.com',
          role: 'authenticated',
        };
        
        const mockSession: Session = {
          access_token: 'mock-access-token',
          refresh_token: 'mock-refresh-token',
          expires_in: 3600,
          expires_at: Math.floor(Date.now() / 1000) + 3600,
          token_type: 'bearer',
          user: mockUser,
        };
        
        // 更新状态
        setUser(mockUser);
        setSession(mockSession);
        
        // 保存模拟token到localStorage
        localStorage.setItem('auth_token', 'mock-access-token');
        
        return { data: mockSession, error: null };
      }
      
      // 正常登录流程
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      return { data: data.session, error };
    } catch (error) {
      console.error('登录失败:', error);
      return { data: null, error: error as Error };
    }
  };

  // 用户注册
  const signUp = async (email: string, password: string, name: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        }
      });
      
      return { data: data.session, error };
    } catch (error) {
      console.error('注册失败:', error);
      return { data: null, error: error as Error };
    }
  };

  // 用户登出
  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      localStorage.removeItem('auth_token');
      setUser(null);
      setSession(null);
      router.push('/');
    } catch (error) {
      console.error('登出失败:', error);
    }
  };

  // 重置密码
  const resetPassword = async (email: string) => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      return { data, error };
    } catch (error) {
      console.error('重置密码失败:', error);
      return { data: null, error: error as Error };
    }
  };

  const value = {
    session,
    user,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth必须在AuthProvider中使用');
  }
  return context;
} 
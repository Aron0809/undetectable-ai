import React from 'react';

interface AuthGuardProps {
  children: React.ReactNode;
}

/**
 * 认证保护组件
 * 已经修改为允许自由访问所有页面
 */
const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  // 直接返回子组件，允许访问所有页面
  return <>{children}</>;
};

export default AuthGuard; 
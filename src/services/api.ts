import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// 定义响应类型接口
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  token?: string;
  errors?: Record<string, string[]>;
}

// 用户相关接口
interface User {
  id: string;
  name: string;
  email: string;
  company?: string;
  jobTitle?: string;
  createdAt: string;
  updatedAt: string;
}

interface UsageStats {
  totalCredits: number;
  usedCredits: number;
  remainingCredits: number;
  humanizedContents: number;
  detectedContents: number;
  lastUsedAt?: string;
}

// 订阅相关接口
interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: 'month' | 'year';
  features: string[];
  credits: number;
  isPopular?: boolean;
}

interface Subscription {
  id: string;
  status: 'active' | 'canceled' | 'past_due' | 'trialing';
  planId: string;
  plan: Plan;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  createdAt: string;
}

interface BillingRecord {
  id: string;
  amount: number;
  currency: string;
  status: 'paid' | 'pending' | 'failed';
  description: string;
  createdAt: string;
  paidAt?: string;
  invoiceUrl?: string;
}

// 内容处理相关接口
interface ContentHistoryItem {
  id: string;
  type: 'humanize' | 'detect';
  inputText: string;
  outputText?: string;
  detectionScore?: number;
  options?: Record<string, any>;
  createdAt: string;
}

// 创建axios实例
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.undetectable.ai',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 客户端环境检查
const isClient = typeof window !== 'undefined';

// 获取令牌的安全函数
const getAuthToken = (): string | null => {
  if (isClient) {
    return localStorage.getItem('auth_token');
  }
  return null;
};

// 安全地设置/移除令牌
const setAuthToken = (token: string): void => {
  if (isClient) {
    localStorage.setItem('auth_token', token);
  }
};

const removeAuthToken = (): void => {
  if (isClient) {
    localStorage.removeItem('auth_token');
  }
};

// 请求拦截器 - 添加认证token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAuthToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截器 - 处理错误
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // 确保返回的数据符合我们的API响应格式
    if (response.data && typeof response.data === 'object') {
      // 如果后端返回的数据不包含success字段，添加默认值
      if (!('success' in response.data)) {
        response.data.success = response.status >= 200 && response.status < 300;
      }
      return response.data;
    }
    // 如果响应不是预期的格式，包装为API响应格式
    return {
      success: true,
      data: response.data
    };
  },
  async (error: any) => {
    // 处理401错误（未授权）
    if (error.response && error.response.status === 401) {
      removeAuthToken();
      if (isClient) {
        window.location.href = '/login';
      }
    }
    // 包装错误响应
    return Promise.reject({
      success: false,
      message: error.response?.data?.message || '请求失败',
      errors: error.response?.data?.errors
    });
  }
);

// 用户认证相关API
export const authAPI = {
  // 用户登录
  login: async (email: string, password: string, rememberMe: boolean): Promise<ApiResponse<{ user: User }>> => {
    const response = await api.post('/auth/login', { email, password, rememberMe });
    if (response && typeof response === 'object' && 'token' in response) {
      setAuthToken(response.token as string);
    }
    return response as unknown as ApiResponse<{ user: User }>;
  },

  // 用户注册
  register: async (userData: {
    name: string;
    email: string;
    password: string;
  }): Promise<ApiResponse<{ user: User }>> => {
    return api.post('/auth/register', userData) as unknown as ApiResponse<{ user: User }>;
  },

  // 忘记密码
  forgotPassword: async (email: string): Promise<ApiResponse> => {
    return api.post('/auth/forgot-password', { email }) as unknown as ApiResponse;
  },

  // 重置密码
  resetPassword: async (token: string, password: string): Promise<ApiResponse> => {
    return api.post('/auth/reset-password', { token, password }) as unknown as ApiResponse;
  },

  // 获取当前用户信息
  getCurrentUser: async (): Promise<ApiResponse<User>> => {
    return api.get('/auth/me') as unknown as ApiResponse<User>;
  },

  // 登出
  logout: async (): Promise<ApiResponse> => {
    removeAuthToken();
    return api.post('/auth/logout') as unknown as ApiResponse;
  }
};

// 用户设置相关API
export const userAPI = {
  // 更新用户资料
  updateProfile: async (profileData: {
    name?: string;
    company?: string;
    jobTitle?: string;
  }): Promise<ApiResponse<User>> => {
    return api.put('/user/profile', profileData) as unknown as ApiResponse<User>;
  },

  // 更新密码
  updatePassword: async (passwordData: {
    currentPassword: string;
    newPassword: string;
  }): Promise<ApiResponse> => {
    return api.put('/user/password', passwordData) as unknown as ApiResponse;
  },

  // 更新通知设置
  updateNotificationSettings: async (settings: {
    emailUpdates?: boolean;
    productNews?: boolean;
    securityAlerts?: boolean;
    tips?: boolean;
  }): Promise<ApiResponse> => {
    return api.put('/user/notifications', settings) as unknown as ApiResponse;
  },

  // 获取用户使用统计
  getUsageStats: async (): Promise<ApiResponse<UsageStats>> => {
    return api.get('/user/stats') as unknown as ApiResponse<UsageStats>;
  }
};

// 内容处理相关API
export const contentAPI = {
  // 人性化AI文本
  humanize: async (text: string, options: {
    intensity?: 'low' | 'medium' | 'high';
    retainMeaning?: boolean;
    style?: string;
  }): Promise<ApiResponse<{ originalText: string; humanizedText: string }>> => {
    return api.post('/content/humanize', { text, options }) as unknown as ApiResponse<{ originalText: string; humanizedText: string }>;
  },

  // 检测内容是否由AI生成
  detect: async (text: string): Promise<ApiResponse<{ score: number; isAI: boolean }>> => {
    return api.post('/content/detect', { text }) as unknown as ApiResponse<{ score: number; isAI: boolean }>;
  },

  // 获取处理历史
  getHistory: async (page = 1, limit = 10): Promise<ApiResponse<{ items: ContentHistoryItem[]; total: number; pages: number }>> => {
    return api.get(`/content/history?page=${page}&limit=${limit}`) as unknown as ApiResponse<{ items: ContentHistoryItem[]; total: number; pages: number }>;
  },

  // 获取单条历史记录详情
  getHistoryItem: async (id: string): Promise<ApiResponse<ContentHistoryItem>> => {
    return api.get(`/content/history/${id}`) as unknown as ApiResponse<ContentHistoryItem>;
  },

  // 删除历史记录
  deleteHistoryItem: async (id: string): Promise<ApiResponse> => {
    return api.delete(`/content/history/${id}`) as unknown as ApiResponse;
  }
};

// 订阅和付款相关API
export const subscriptionAPI = {
  // 获取可用套餐
  getPlans: async (): Promise<ApiResponse<Plan[]>> => {
    return api.get('/subscription/plans') as unknown as ApiResponse<Plan[]>;
  },

  // 获取当前订阅信息
  getCurrentSubscription: async (): Promise<ApiResponse<Subscription>> => {
    return api.get('/subscription/current') as unknown as ApiResponse<Subscription>;
  },

  // 升级/降级订阅
  changePlan: async (planId: string): Promise<ApiResponse<Subscription>> => {
    return api.post('/subscription/change', { planId }) as unknown as ApiResponse<Subscription>;
  },

  // 取消订阅
  cancelSubscription: async (): Promise<ApiResponse> => {
    return api.post('/subscription/cancel') as unknown as ApiResponse;
  },

  // 获取账单历史
  getBillingHistory: async (): Promise<ApiResponse<BillingRecord[]>> => {
    return api.get('/subscription/billing-history') as unknown as ApiResponse<BillingRecord[]>;
  },

  // 添加新支付方式
  addPaymentMethod: async (paymentMethodData: Record<string, any>): Promise<ApiResponse> => {
    return api.post('/subscription/payment-method', paymentMethodData) as unknown as ApiResponse;
  }
};

export default api; 
import { NextApiRequest, NextApiResponse } from 'next';
import { detectAIContent } from '../../../lib/openRouter';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 添加详细的环境变量调试日志
  console.log('API环境变量调试信息:', {
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY ? '已设置' : '未设置',
    OPENROUTER_API_KEY_LENGTH: process.env.OPENROUTER_API_KEY?.length || 0,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NODE_ENV: process.env.NODE_ENV,
    REQUEST_HEADERS: req.headers,
    envKeys: Object.keys(process.env).filter(key => key.includes('OPENROUTER') || key.includes('NEXT_PUBLIC'))
  });

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { text, language = 'zh' } = req.body;
    
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ success: false, message: 'No text provided' });
    }
    
    // 验证API密钥
    if (!process.env.OPENROUTER_API_KEY) {
      return res.status(500).json({ 
        success: false, 
        message: 'OpenRouter API key is not configured' 
      });
    }
    
    console.log('开始AI检测，参数:', { textLength: text.length, language });
    
    const result = await detectAIContent(text, language);
    
    console.log('AI检测完成，结果:', result);
    
    return res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    console.error('AI检测API错误:', {
      message: error.message,
      stack: error.stack,
      status: error.status,
      headers: error.headers,
      env: {
        hasApiKey: !!process.env.OPENROUTER_API_KEY,
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL
      }
    });
    
    // 根据错误类型返回不同的状态码
    if (error.status === 401) {
      return res.status(401).json({ 
        success: false, 
        message: 'Authentication failed',
        details: error.message
      });
    }
    
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error',
      error: error.message 
    });
  }
} 
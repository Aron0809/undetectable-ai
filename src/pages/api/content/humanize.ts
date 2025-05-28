import { NextApiRequest, NextApiResponse } from 'next';
import { humanizeAIContent } from '../../../lib/openRouter';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 添加详细的环境变量调试日志
  console.log('人性化API环境变量调试信息:', {
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY ? '已设置' : '未设置',
    OPENROUTER_API_KEY_LENGTH: process.env.OPENROUTER_API_KEY?.length || 0,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NODE_ENV: process.env.NODE_ENV,
    envKeys: Object.keys(process.env).filter(key => key.includes('OPENROUTER') || key.includes('NEXT_PUBLIC'))
  });

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { text, options } = req.body;
    
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ success: false, message: 'No text provided' });
    }
    
    console.log('开始人性化处理，参数:', { 
      textLength: text.length, 
      options 
    });
    
    const result = await humanizeAIContent(text, {
      intensity: options?.intensity || 'medium',
      preserveMeaning: options?.preserveMeaning || true,
      style: options?.style,
      language: options?.language || 'zh'
    });
    
    console.log('人性化处理完成，结果长度:', result.length);
    
    return res.status(200).json({ 
      success: true, 
      data: { 
        originalText: text, 
        humanizedText: result
      } 
    });
  } catch (error: any) {
    console.error('人性化API错误:', {
      message: error.message,
      stack: error.stack,
      env: {
        hasApiKey: !!process.env.OPENROUTER_API_KEY,
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL
      }
    });
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error',
      error: error.message 
    });
  }
} 
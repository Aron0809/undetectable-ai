import { NextApiRequest, NextApiResponse } from 'next';
import { detectAIContent } from '../../../lib/openRouter';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { text, language = 'zh' } = req.body;
    
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ success: false, message: 'No text provided' });
    }
    
    const result = await detectAIContent(text, language);
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('检测API错误:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
} 
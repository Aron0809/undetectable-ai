import { NextApiRequest, NextApiResponse } from 'next';
import { detectAIContent, humanizeAIContent } from '../../lib/openRouter';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    if (req.url?.includes('/api/content/detect')) {
      const { text, language = 'zh' } = req.body;
      
      if (!text || typeof text !== 'string') {
        return res.status(400).json({ success: false, message: 'No text provided' });
      }
      
      const result = await detectAIContent(text, language);
      return res.status(200).json({ success: true, data: result });
    } 
    else if (req.url?.includes('/api/content/humanize')) {
      const { text, options } = req.body;
      
      if (!text || typeof text !== 'string') {
        return res.status(400).json({ success: false, message: 'No text provided' });
      }
      
      const result = await humanizeAIContent(text, {
        intensity: options?.intensity || 'medium',
        preserveMeaning: options?.retainMeaning || true,
        style: options?.style,
        language: options?.language || 'zh'
      });
      
      return res.status(200).json({ 
        success: true, 
        data: { 
          originalText: text, 
          humanizedText: result
        } 
      });
    }
    else {
      return res.status(404).json({ success: false, message: 'Endpoint not found' });
    }
  } catch (error) {
    console.error('API处理错误:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
} 
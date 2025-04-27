import React, { useState } from 'react';
import { Button, Card, Input, Slider, Radio, message } from 'antd';
import { detectAIContent, humanizeAIContent } from '../lib/openRouter';
import type { RadioChangeEvent } from 'antd/es/radio';

const { TextArea } = Input;
const { Group: RadioGroup } = Radio;

interface AIContentToolsProps {
  className?: string;
}

const AIContentTools: React.FC<AIContentToolsProps> = ({ className }) => {
  const [text, setText] = useState<string>('');
  const [resultText, setResultText] = useState<string>('');
  const [detectionResult, setDetectionResult] = useState<{ score: number; isAI: boolean; analysis: string } | null>(null);
  const [intensity, setIntensity] = useState<number>(0.7);
  const [language, setLanguage] = useState<string>('zh');
  const [style, setStyle] = useState<string>('casual');
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'detect' | 'humanize'>('detect');

  const handleDetect = async () => {
    if (!text.trim()) {
      message.warning('请输入需要检测的内容');
      return;
    }

    setLoading(true);
    try {
      const result = await detectAIContent(text, language);
      setDetectionResult(result);
      message.success('检测完成');
    } catch (error) {
      message.error('检测失败，请稍后再试');
    } finally {
      setLoading(false);
    }
  };

  const handleHumanize = async () => {
    if (!text.trim()) {
      message.warning('请输入需要处理的内容');
      return;
    }

    setLoading(true);
    try {
      // 将滑块值转换为low/medium/high强度
      let intensityValue: 'low' | 'medium' | 'high';
      if (intensity <= 0.3) {
        intensityValue = 'low';
      } else if (intensity <= 0.7) {
        intensityValue = 'medium';
      } else {
        intensityValue = 'high';
      }

      const humanized = await humanizeAIContent(text, {
        intensity: intensityValue,
        preserveMeaning: true,
        style,
        language
      });

      setResultText(humanized);
      message.success('处理完成');
    } catch (error) {
      message.error('处理失败，请稍后再试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card 
      title="AI内容工具" 
      className={className}
      tabList={[
        { key: 'detect', tab: 'AI检测' },
        { key: 'humanize', tab: 'AI内容人性化' },
      ]}
      activeTabKey={activeTab}
      onTabChange={(key: string) => setActiveTab(key as 'detect' | 'humanize')}
    >
      <div className="mb-4">
        <TextArea
          rows={6}
          value={text}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
          placeholder="请输入内容..."
          className="mb-2"
        />
      </div>

      {activeTab === 'detect' ? (
        <>
          <Button 
            type="primary" 
            onClick={handleDetect} 
            loading={loading}
            block
          >
            检测AI生成内容
          </Button>

          {detectionResult && (
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <p>AI生成概率: <span className="font-bold">{detectionResult.score}%</span></p>
              <p>分析结果: <span className="font-bold">{detectionResult.isAI ? '可能是AI生成' : '可能是人类撰写'}</span></p>
              {detectionResult.analysis && (
                <div className="mt-2">
                  <p className="font-semibold">详细分析:</p>
                  <p className="whitespace-pre-line">{detectionResult.analysis}</p>
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <>
          <div className="mb-4">
            <div className="mb-2">
              <label className="block mb-1">语言:</label>
              <RadioGroup 
                value={language} 
                onChange={(e: RadioChangeEvent) => setLanguage(e.target.value)}
              >
                <Radio value="zh">中文</Radio>
                <Radio value="en">英文</Radio>
              </RadioGroup>
            </div>

            <div className="mb-2">
              <label className="block mb-1">风格:</label>
              <RadioGroup 
                value={style} 
                onChange={(e: RadioChangeEvent) => setStyle(e.target.value)}
              >
                <Radio value="casual">日常</Radio>
                <Radio value="academic">学术</Radio>
                <Radio value="professional">专业</Radio>
              </RadioGroup>
            </div>

            <div className="mb-2">
              <label className="block mb-1">人性化强度: {intensity}</label>
              <Slider 
                min={0.1}
                max={1.0}
                step={0.1}
                value={intensity}
                onChange={(value: number) => setIntensity(value)}
              />
            </div>
          </div>

          <Button 
            type="primary" 
            onClick={handleHumanize} 
            loading={loading}
            block
          >
            人性化处理
          </Button>

          {resultText && (
            <div className="mt-4">
              <label className="block mb-1">处理结果:</label>
              <TextArea 
                rows={6}
                value={resultText}
                readOnly
                className="bg-gray-50"
              />
            </div>
          )}
        </>
      )}
    </Card>
  );
};

export default AIContentTools; 
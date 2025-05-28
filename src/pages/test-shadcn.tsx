import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Slider } from '../components/ui/slider';

export default function TestShadcn() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  return (
    <Layout
      title="Shadcn/UI 测试页面 - Undetectable.AI"
      description="测试 Shadcn/UI 组件集成"
    >
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Shadcn/UI 组件测试</h1>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* 按钮测试 */}
            <Card>
              <CardHeader>
                <CardTitle>按钮组件</CardTitle>
                <CardDescription>测试不同样式的按钮</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button>默认按钮</Button>
                  <Button variant="secondary">次要按钮</Button>
                  <Button variant="destructive">危险按钮</Button>
                  <Button variant="outline">轮廓按钮</Button>
                  <Button variant="ghost">幽灵按钮</Button>
                  <Button variant="link">链接按钮</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">小按钮</Button>
                  <Button size="default">默认大小</Button>
                  <Button size="lg">大按钮</Button>
                </div>
              </CardContent>
            </Card>

            {/* 输入组件测试 */}
            <Card>
              <CardHeader>
                <CardTitle>输入组件</CardTitle>
                <CardDescription>测试输入框和文本域</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="test-input">测试输入框</Label>
                  <Input
                    id="test-input"
                    placeholder="请输入内容..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="test-textarea">测试文本域</Label>
                  <Textarea
                    id="test-textarea"
                    placeholder="请输入多行内容..."
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* 徽章测试 */}
            <Card>
              <CardHeader>
                <CardTitle>徽章组件</CardTitle>
                <CardDescription>测试不同样式的徽章</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>默认徽章</Badge>
                  <Badge variant="secondary">次要徽章</Badge>
                  <Badge variant="destructive">危险徽章</Badge>
                  <Badge variant="outline">轮廓徽章</Badge>
                </div>
              </CardContent>
            </Card>

            {/* 滑块测试 */}
            <Card>
              <CardHeader>
                <CardTitle>滑块组件</CardTitle>
                <CardDescription>测试滑块控件，当前值: {sliderValue[0]}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-sm text-muted-foreground">
                    拖动滑块来改变值
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 综合示例 */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>综合示例</CardTitle>
              <CardDescription>
                一个包含多个 Shadcn/UI 组件的表单示例
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名</Label>
                  <Input id="name" placeholder="请输入您的姓名" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">邮箱</Label>
                  <Input id="email" type="email" placeholder="请输入您的邮箱" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">消息</Label>
                <Textarea
                  id="message"
                  placeholder="请输入您的消息..."
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label>优先级</Label>
                <div className="flex gap-2">
                  <Badge variant="outline">低</Badge>
                  <Badge>中</Badge>
                  <Badge variant="destructive">高</Badge>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button>提交</Button>
                <Button variant="outline">取消</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
} 
import axios from 'axios';

async function testDetectAPI() {
  try {
    const response = await axios.post('http://localhost:3000/api/content/detect', {
      text: '这是一段测试文本，用来验证AI检测功能是否正常工作。这段文本应该会被识别为人类撰写的内容。',
      language: 'zh'
    });

    console.log('AI检测结果:', response.data);
  } catch (error: any) {
    console.error('AI检测API测试失败:', error.response?.data || error.message);
  }
}

async function testHumanizeAPI() {
  try {
    const response = await axios.post('http://localhost:3000/api/content/humanize', {
      text: '这是一段由AI生成的文本。它的特点是结构严谨，用词规范，但可能缺乏人类写作的自然感。通过人性化处理，我们希望让它变得更自然。',
      options: {
        intensity: 'medium',
        preserveMeaning: true,
        style: 'casual',
        language: 'zh'
      }
    });

    console.log('人性化处理结果:', response.data);
  } catch (error: any) {
    console.error('人性化API测试失败:', error.response?.data || error.message);
  }
}

// 运行测试
async function runTests() {
  console.log('开始API测试...\n');
  
  console.log('1. 测试AI检测API');
  await testDetectAPI();
  
  console.log('\n2. 测试人性化API');
  await testHumanizeAPI();
  
  console.log('\n测试完成');
}

runTests(); 
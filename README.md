# Undetectable.AI 网站项目

一个使用Next.js和Supabase开发的AI内容人性化和检测工具网站。

## 技术栈

- **前端框架**: Next.js + React
- **样式**: TailwindCSS
- **认证**: Supabase Auth
- **TypeScript**: 强类型支持

## 安装与设置

1. 克隆仓库：
   ```bash
   git clone <仓库地址>
   cd project02
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 配置环境变量：
   创建`.env.local`文件并添加以下内容：
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://wmwteximarzybzfwcilh.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indtd3RleGltYXJ6eWJ6ZndjaWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NzE5NjgsImV4cCI6MjA2MDQ0Nzk2OH0.2a-l9O8dD8dPvtZe0FS83JT5fBJ32F56n2xvHiVNIaQ
   NEXT_PUBLIC_OPENROUTER_API_KEY=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
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. 启动开发服务器：
   ```bash
   npm run dev
   ```

## 当前开发状态

### 临时更改

1. **认证系统临时禁用**：
   - 目前已修改AuthGuard组件，允许访问所有页面而不需要登录
   - 这是为了便于开发和测试，后续会根据需要重新启用认证

2. **测试账号**：
   - 如果需要测试需要登录的功能，可以使用以下测试账号：
     - 邮箱：`test@example.com` 
     - 密码：`password123`
   - 此测试账号会绕过Supabase认证，直接创建本地会话

3. **已知问题**：
   - 部分自定义Tailwind类已修复，如有新的类似错误，请遵循相同的修复模式

### 下一步开发计划

1. 完善AI检测和人性化工具的功能实现
2. 添加用户使用记录和统计功能
3. 优化UI/UX体验
4. 实现多语言支持

## Supabase认证配置

本项目使用Supabase提供用户认证功能。以下是认证功能的使用说明：

### Supabase控制台设置

1. 登录Supabase控制台：https://app.supabase.io/
2. 创建一个新项目或选择现有项目
3. 导航到"Authentication"选项卡
4. 在"Email Templates"部分，可以自定义邮件模板
5. 启用所需的认证提供者（本项目使用Email和密码认证）

### 功能列表

- **用户注册**: 用户可以使用邮箱和密码注册
- **用户登录**: 使用邮箱和密码登录
- **密码重置**: 忘记密码时可以请求重置链接
- **会话管理**: 自动管理和刷新用户会话
- **路由保护**: 未认证用户无法访问受保护页面

### 认证流程

1. **注册流程**:
   - 用户填写注册表单（姓名、邮箱、密码）
   - 提交后，系统向用户邮箱发送验证邮件
   - 用户验证邮箱后才能完成注册

2. **登录流程**:
   - 用户输入邮箱和密码
   - 验证通过后，生成会话并重定向到仪表板

3. **密码重置流程**:
   - 用户在登录页点击"忘记密码"
   - 输入邮箱并提交
   - 系统发送带有重置链接的邮件
   - 用户点击链接设置新密码

## 项目结构

- **src/lib/supabase.ts**: Supabase客户端配置
- **src/context/AuthContext.tsx**: 认证上下文提供者
- **src/components/auth/AuthGuard.tsx**: 路由保护组件
- **src/pages/login.tsx**: 登录页面
- **src/pages/signup.tsx**: 注册页面
- **src/pages/forgot-password.tsx**: 忘记密码页面
- **src/pages/dashboard.tsx**: 用户仪表板（受保护页面）

## 开发注意事项

1. **敏感信息**:
   - 不要在代码中硬编码Supabase URL或API密钥
   - 使用环境变量管理这些敏感信息

2. **错误处理**:
   - 所有与认证相关的操作都应有适当的错误处理
   - 向用户显示友好的错误信息

3. **类型安全**:
   - 使用TypeScript类型定义确保类型安全
   - 特别是处理用户和会话对象时

4. **样式修改**:
   - 修改CSS时注意使用标准的Tailwind类
   - 避免使用未定义的自定义类，如需自定义，确保在tailwind.config.js中定义 
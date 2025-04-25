import { createClient } from '@supabase/supabase-js';

// 使用环境变量获取Supabase URL和匿名密钥
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wmwteximarzybzfwcilh.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indtd3RleGltYXJ6eWJ6ZndjaWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NzE5NjgsImV4cCI6MjA2MDQ0Nzk2OH0.2a-l9O8dD8dPvtZe0FS83JT5fBJ32F56n2xvHiVNIaQ';
 
export const supabase = createClient(supabaseUrl, supabaseAnonKey); 
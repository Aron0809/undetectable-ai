import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Signup() {
  const router = useRouter();

  useEffect(() => {
    // 重定向到主页
    router.push('/');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p className="text-center text-gray-500">Redirecting...</p>
      </div>
  );
} 
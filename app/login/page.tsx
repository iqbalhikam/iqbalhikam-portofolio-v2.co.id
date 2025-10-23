// File: app/login/page.tsx
'use client'; // Ini WAJIB karena kita pakai hook dan event handler

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [message, setMessage] = useState<string | null>(null);
  const searchParams = useSearchParams();
  useEffect(() => {
    const errorMsg = searchParams.get('error');
    if (errorMsg) {
      setMessage(errorMsg);
    }
  }, [searchParams]);
  // Fungsi untuk login dengan GitHub
  const handleLoginWithGitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/auth/callback`, // Halaman callback
      },
    });

    if (error) {
      setMessage('Error: Tidak bisa login. ' + error.message);
    }
  };

  // Fungsi untuk login dengan Email (jika Anda mau)
  // const handleLoginWithEmail = async () => { ... }

  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm rounded-lg border border-primary/20 p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">Dashboard Login</h1>

        <button onClick={handleLoginWithGitHub} className="w-full rounded-md bg-white px-4 py-2 text-black transition-colors hover:bg-gray-200">
          Login dengan GitHub
        </button>

        {message && <p className="mt-4 text-center text-red-500">{message}</p>}

        <p className="mt-6 text-center text-sm text-gray-400">Ini adalah halaman login khusus admin.</p>
      </div>
    </main>
  );
}

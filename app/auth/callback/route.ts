// File: app/auth/callback/route.ts
import { createClient } from '@/lib/supabase/server'; // <-- Pakai server helper
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');

  // Jika 'code' ada, tukarkan dengan session
  if (code) {
    const supabase = createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      // Sukses login, arahkan ke halaman dashboard
      return NextResponse.redirect(`${origin}/dashboard`);
    }
  }

  // Gagal login, arahkan kembali ke halaman login dengan pesan error
  return NextResponse.redirect(`${origin}/login?error=Could not authenticate user`);
}

import { type NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const pathname = request.nextUrl.pathname;

  // Ambil ID Admin dari .env
  const adminId = process.env.ADMIN_USER_ID;

  // --- LOGIKA PERLINDUNGAN BARU ---

  // 1. Jika user BELUM login DAN mencoba mengakses dashboard
  if (!session && pathname.startsWith('/dashboard')) {
    // Alihkan ke halaman login
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return Response.redirect(url);
  }

  // 2. (ATURAN BARU) Jika user SUDAH login, TAPI ID-nya BUKAN ADMIN
  if (session && pathname.startsWith('/dashboard') && session.user.id !== adminId) {
    // Tendang keluar! Arahkan ke login dengan pesan error
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    url.search = '?error=Akses ditolak. Anda bukan admin.';
    return Response.redirect(url);
  }

  // 3. (ATURAN DIPERBARUI) Jika user SUDAH login, ADALAH ADMIN, DAN mencoba ke /login
  if (session && session.user.id === adminId && pathname === '/login') {
    // Alihkan ke halaman utama dashboard
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return Response.redirect(url);
  }

  // Jika semua aturan di atas lolos, biarkan user
  return response;
}

// Config tetap sama
export const config = {
  matcher: [
    '/dashboard/:path*', // Semua halaman di bawah /dashboard
    '/login', // Halaman login
  ],
};

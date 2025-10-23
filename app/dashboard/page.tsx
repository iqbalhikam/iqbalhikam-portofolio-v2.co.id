// File: app/dashboard/page.tsx
import { createClient } from '@/lib/supabase/server'; // <-- Pakai SERVER helper
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const supabase = createClient();

  // Ambil data user yang sedang login
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // (Keamanan ganda) Jika tidak ada user, tendang ke login
  if (!user) {
    redirect('/login');
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-white">Selamat Datang, Admin!</h1>
      <p className="mt-2 text-lg text-gray-300">Anda login sebagai: {user.email}</p>
      <p className="mt-6 text-gray-400">Silakan pilih menu di sidebar untuk mulai mengelola konten portofolio Anda.</p>
    </div>
  );
}

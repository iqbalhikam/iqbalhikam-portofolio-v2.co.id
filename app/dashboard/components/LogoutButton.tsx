// File: app/dashboard/components/LogoutButton.tsx
'use client';

import { createClient } from '@/lib/supabase/client'; // <-- Pakai CLIENT helper
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    // Setelah logout, paksa refresh dan arahkan ke login
    router.push('/login');
    router.refresh();
  };

  return (
    <button onClick={handleLogout} className="rounded-md bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600">
      Logout
    </button>
  );
}

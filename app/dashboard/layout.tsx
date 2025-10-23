// File: app/dashboard/layout.tsx
import React from 'react';
import LogoutButton from './components/LogoutButton'; // <-- Impor tombol logout
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigasi */}
      <aside className="w-64 flex-shrink-0 bg-gray-900 p-6 text-white">
        <h2 className="mb-8 text-2xl font-bold">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          <Link href="/dashboard" className="hover:text-primary">
            Home
          </Link>
          <Link href="/dashboard/certificates" className="hover:text-primary">
            Kelola Sertifikat
          </Link>
          <Link href="/dashboard/projects" className="hover:text-primary">
            Kelola Proyek
          </Link>
        </nav>

        <div className="mt-auto pt-8">
          <LogoutButton />
        </div>
      </aside>

      {/* Konten Halaman */}
      <main className="flex-1 overflow-auto bg-gray-800 p-8">{children}</main>
    </div>
  );
}

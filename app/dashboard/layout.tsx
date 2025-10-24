// File: app/dashboard/layout.tsx
import React from 'react';
import LogoutButton from './components/LogoutButton'; // <-- Impor tombol logout
import Link from 'next/link';
import NavBar from '@/components/navbar/NavBar';
import NavLink from '@/components/navbar/NavLink';
import { RxDashboard } from 'react-icons/rx';
import { LiaCertificateSolid } from 'react-icons/lia';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {children}
      <NavBar>
        <NavLink href="/dashboard"><RxDashboard className='text-sm'/><h1 className=" text-[8px]">Dashboard</h1></NavLink>
        <NavLink href="/dashboard/certificates"><LiaCertificateSolid className='text-sm' /><h1 className=" text-[8px]">Certificates</h1></NavLink>
      </NavBar>
    </div>
  );
}

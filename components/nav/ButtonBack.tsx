'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface ButtonBackProps {
  children: React.ReactNode;
  className?: string;
}
const ButtonBack = ({ children, className }: ButtonBackProps) => {
  const router = useRouter();
  return (
    <Button className={`cursor-pointer shadow-none ${className}`} onClick={() => router.back()}>
      {children}
    </Button>
  );
};

export default ButtonBack;

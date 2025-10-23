// File: lib/supabase/middleware.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export const createClient = (request: NextRequest) => {
  // Buat client Supabase untuk sisi server di Middleware
  const response = NextResponse.next();

  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        // Jika response-nya ada, kita set cookie-nya
        if (response) {
          response.cookies.set({
            name,
            value,
            ...options,
          });
        }
      },
      remove(name: string, options: CookieOptions) {
        // Jika response-nya ada, kita hapus cookie-nya
        if (response) {
          response.cookies.set({
            name,
            value: '',
            ...options,
          });
        }
      },
    },
  });

  // Penting: kita kembalikan supabase client DAN responsenya
  return { supabase, response };
};

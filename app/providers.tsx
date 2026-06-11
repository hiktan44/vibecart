'use client'

import { createBrowserClient } from '@supabase/ssr'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { SupabaseContext } from '@/lib/supabase-context'

export function Providers({ children }: { children: React.ReactNode }) {
  const [supabaseClient] = useState(() => 
    createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  )

  return (
    <SupabaseContext.Provider value={supabaseClient}>
      {children}
      <Toaster position="top-right" />
    </SupabaseContext.Provider>
  )
}
'use client'

import { createContext, useContext } from 'react'
import { SupabaseClient } from '@supabase/supabase-js'

type SupabaseContextType = SupabaseClient | null

export const SupabaseContext = createContext<SupabaseContextType>(null)

export const useSupabase = () => {
  const context = useContext(SupabaseContext)
  if (!context) {
    throw new Error('useSupabase must be used within a SupabaseProvider')
  }
  return context
}
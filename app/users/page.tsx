'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'
import { redirect } from "next/navigation";

export default function Page() {
  const [users, setUsers] = useState<any[] | null>(null)
  const supabase = createClient()
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        return redirect("/login");
      }
    }
    const getData = async () => {
      const { data } = await supabase.from('users').select()
      setUsers(data)
    }
    checkAuth()
    getData()
  }, [])

  return <pre>{JSON.stringify(users, null, 2)}</pre>
}
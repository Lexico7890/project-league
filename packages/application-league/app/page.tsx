import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Home () {
  const supabase = createClientComponentClient({ cookies } as any)
  const { data: rol } = await supabase.from('rol').select()
  return (
    <main className="flex flex-col h-screen w-screen bg-Background">
      <div>
        <span>Home</span>
        <pre>{JSON.stringify(rol, null, 2)}</pre>
      </div>
    </main>
  )
}

'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const AuthClientButton = () => {
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <header>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>
    </header>
  )
}

export default AuthClientButton

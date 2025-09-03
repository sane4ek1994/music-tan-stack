import { useMutation } from '@tanstack/react-query'
import { client } from '../../../../shared/api/client.ts'

export const LoginButton = () => {
  const callbackUrl = 'http://localhost:5173/oauth/callback'
  const mutation = useMutation({
    mutationFn: async ({ code }: { code: string }) => {
      const response = await client.POST('/auth/login', {
        body: {
          code: code,
          redirectUri: callbackUrl,
          rememberMe: true,
          accessTokenTTL: '1d'
        }
      })

      if (response.error) {
        throw new Error(response.error.message)
      }
      return response.data
    },
    onSuccess: data => {
      localStorage.setItem('music-fun-refresh-token', data.refreshToken)
      localStorage.setItem('music-fun-access-token', data.accessToken)
    }
  })

  const handleLoginClick = () => {
    window.addEventListener('message', handleOauthMessage)
    window.open(
      `https://musicfun.it-incubator.app/api/1.0/auth/oauth-redirect?callbackUrl=${callbackUrl} `,
      'apihub-oauth2',
      'width=600,height=500'
    )
  }

  const handleOauthMessage = async (event: MessageEvent) => {
    window.removeEventListener('message', handleOauthMessage)
    if (event.origin !== document.location.origin) {
      console.warn('origin not match')
      return
    }
    const code = event.data.code

    if (!code) {
      console.warn('no code in message')
      return
    }

    await mutation.mutate({ code })
  }

  return <button onClick={handleLoginClick}>Login with APIHUB</button>
}

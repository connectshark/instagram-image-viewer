export default defineEventHandler(async (event) => {
  const { code } = getQuery(event)
  const runtimeConfig = useRuntimeConfig()

  const form = new URLSearchParams({
    client_id: runtimeConfig.public.APP_ID,
    code: code,
    redirect_uri: runtimeConfig.public.REDIRECT_URL,
    client_secret: runtimeConfig.APP_SECRET,
    grant_type: 'authorization_code'
  })
  const fetch_response = await fetch('https://api.instagram.com/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    },
    body: form
  })

  const res = await fetch_response.json()
  return sendRedirect(event, '/callback?access_token=' + res.access_token + '&user_id=' + res.user_id)
})
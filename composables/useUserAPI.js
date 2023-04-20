export default function () {
  const { public: { API_DOMAIN, API_VERSION } } = useRuntimeConfig()
  const loading = ref(false)
  const user = ref(null)

  const getUser = async (token) => {
    loading.value = true
    const fetch_response = await fetch(`${API_DOMAIN}/${API_VERSION}/me?fields=id,username,media_count,account_type&access_token=${token}`)
    const response = await fetch_response.json()
    user.value = response
    loading.value = false
  }

  return {
    user,
    loading,
    getUser
  }
}
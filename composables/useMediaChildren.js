export default function (token, postId) {
  const { public: { API_DOMAIN, API_VERSION } } = useRuntimeConfig()
  const loading = ref(false)
  const list = ref([])

  const getMediaChildren = async () => {
    loading.value = true
    const fetch_response = await fetch(`${API_DOMAIN}/${API_VERSION}/${postId}/children?fields=id,is_shared_to_feed,media_type,media_url,permalink,thubnail_url,timestamp,username&access_token=${token}`)
    const response = await fetch_response.json()
    list.value = response.data
    loading.value = false
  }

  onMounted(getMediaChildren)

  return {
    loading,
    list,
    getMediaChildren
  }
}
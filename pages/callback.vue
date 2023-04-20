<template>
  <NuxtLayout>
    <div v-if="loading"><i class='bx bx-loader-alt bx-spin bx-md' ></i>loading..</div>
    <div v-else>
      <p>跳轉中...</p>
    </div>
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const token = route.query.access_token
const userId = useUserId()
const username = useUserName()

const { public: { ACCRESS_TOKEN } } = useRuntimeConfig()
const {
  loading,
  user,
  getUser
} = useUserAPI(ACCRESS_TOKEN)

onMounted(async () => {
  await getUser(ACCRESS_TOKEN)
})

watch(user, value => {
  userId.value = value.id
  username.value = value.username

  setTimeout(() => {
    router.replace('/me')
  }, 1000)
})

</script>
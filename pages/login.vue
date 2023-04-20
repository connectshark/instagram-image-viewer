<template>
  <NuxtLayout>
    <h2>登入頁面</h2>
    <div>
      <a class=" bg-primary p-3 rounded inline-block hover:opacity-80" :href="url">登入</a>
    </div>
  </NuxtLayout>
</template>

<script setup>
const config = useRuntimeConfig()
const url = `https://api.instagram.com/oauth/authorize?client_id=${config.public.APP_ID}&redirect_uri=${config.public.REDIRECT_URL}&scope=user_profile,user_media&response_type=code`
</script>
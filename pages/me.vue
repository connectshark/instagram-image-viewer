<template>
  <NuxtLayout>
    <h2 class="text-xl">Hello! {{ username }}</h2>
    <div v-if="loading"><i class='bx bx-loader-alt bx-spin bx-md' ></i>loading..</div>
    <ul v-else class=" grid grid-cols-2 gap-4">
      <li v-for="post in list" :key="post.id" class=" bg-white h-min">
        <NuxtLink class=" block p-1" :to="'p/' + post.id">
          <figure v-if="post.media_type === 'CAROUSEL_ALBUM'">
            <img :src="post.media_url" :alt="post.caption">
          </figure>
          <figure v-else-if="post.media_type === 'IMAGE'">
            <img :src="post.media_url" :alt="post.caption">
          </figure>
          <video v-else >
            <source :src="post.media_url">
          </video>
          <h3 class=" line-clamp-2">{{ post.caption }}</h3>
        </NuxtLink>
      </li>
    </ul>
  </NuxtLayout>
</template>

<script setup>
const username = useUserName()
const token = useToken()
const {
  list,
  loading
} = useMedia(token.value)
</script>
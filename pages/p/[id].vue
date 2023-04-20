<template>
<NuxtLayout>
  <h2>查看所有畫廊</h2>
  <div v-if="loading"><i class='bx bx-loader-alt bx-spin bx-md' ></i>loading..</div>
  <ul v-else class=" grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    <li class="" v-for="image in list" :key="image.id">
      <figure>
        <img :src="image.media_url" :alt="image.id">
      </figure>
      <p class=" bg-gray-100 p-2 text-sm rounded truncate select-all">{{ image.permalink }}</p>
    </li>
  </ul>
</NuxtLayout>
</template>

<script setup>
const route = useRoute()
const token = useToken()

const {
  loading,
  list
} = useMediaChildren(token.value, route.params.id)

</script>
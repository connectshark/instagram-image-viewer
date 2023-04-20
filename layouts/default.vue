<template>
<header>
  <div class="w-11/12 mx-auto max-w-4xl py-6">
    <h1 class=" text-2xl">
      <NuxtLink to="/">{{ appConfig.APP_NAME }}</NuxtLink>
    </h1>
  </div>
</header>
<main class=" min-h-min-svh">
  <div class="w-11/12 mx-auto max-w-4xl">
    <slot/>
  </div>
</main>
<footer class=" bg-gray-900 text-white">
  <div class="w-11/12 mx-auto max-w-4xl py-10">
    <h3><i class='bx bx-copyright'></i>{{ appConfig.APP_NAME }}</h3>
  </div>
</footer>
</template>

<script setup>
const appConfig = useAppConfig()
</script>
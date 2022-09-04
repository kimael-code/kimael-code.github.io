<script setup>
useHead({
  titleTemplate: (title) =>
    title ? `Maikel Carballo - ${title}` : 'Maikel Carballo',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
  meta: [
    { content: 'Desarrollador Web Full Stack', name: 'description' },
    {
      content: 'programador web, desarrollador web, full stack',
      name: 'keywords',
    },
    { content: 'Desarrollador Web Full Stack', property: 'og:title' },
    { content: 'website', property: 'og:type' },
    {
      content: 'https://kimael-code.github.io/',
      property: 'og:url',
    },
    { content: 'Maikel Carballo - Portafolio', property: 'og:site_name' },
    { content: 'Desarrollador Web Full Stack', property: 'og:description' },
    { content: 'summary_large_image', name: 'twitter:card' },
    { content: '@_kimael_', name: 'twitter:site' },
    { content: 'twitter.com/_kimael_', name: 'twitter:domain' },
    { content: 'Desarrollador Web Full Stack', name: 'twitter:title' },
    {
      content: 'Desarrollador Web Full Stack. Profesor en Informática.',
      name: 'twitter:description',
    },
  ],
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

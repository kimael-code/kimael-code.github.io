<script setup>
useHead({
  titleTemplate: (title) => (title ? `Maikel Carballo - ${title}` : 'Maikel Carballo'),
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
})
useServerSeoMeta({
  name: 'Mi Portafolio',
  description: 'Este es mi portafolio web.',
  content: 'Portafolio Web de Maikel Carballo.',
  author: 'Maikel Carballo',
  keywords: 'programador web, desarrollador web, full stack, portafolio, portfolio, web developer, developer, full stack web developer',
  ogType: 'website',
  ogTitle: 'Maikel Carballo',
  ogUrl: 'https://kimael-code.github.io/',
  ogImage: 'https://pbs.twimg.com/profile_images/1361041473366601728/mYIfVGNd_400x400.jpg',
  ogDescription: 'Este es mi portafolio web.',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Mi Portafolio',
  twitterSite: 'https://kimael-code.github.io/',
  twitterCreator: '@_kimael_',
  twitterImage: 'https://pbs.twimg.com/profile_images/1361041473366601728/mYIfVGNd_400x400.jpg',
  twitterDescription: 'Este es mi portafolio web.',
})
</script>

<template>
  <div>
    <Html :lang="$i18n.locale"></Html>
    <TheNavbar />
    <NuxtLoadingIndicator />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

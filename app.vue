<script setup>
useHead({
  titleTemplate: (title) =>
    title ? `Maikel Carballo - ${title}` : 'Maikel Carballo',
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
  // meta: [
  //   {
  //     property: 'og:type',
  //     content: 'website',
  //   },
  //   {
  //     property: 'og:title',
  //     content: 'Maikel Carballo',
  //   },
  //   {
  //     property: 'og:url',
  //     content: 'https://kimael-code.github.io/',
  //   },
  //   {
  //     property: 'og:image',
  //     content:
  //       'https://pbs.twimg.com/profile_images/1361041473366601728/mYIfVGNd_400x400.jpg',
  //   },
  //   {
  //     property: 'og:description',
  //     content: 'Desarrollador Web Full Stack',
  //   },
  //   {
  //     name: 'twitter:card',
  //     content: 'summary_large_image',
  //   },
  //   {
  //     name: 'twitter:title',
  //     content: 'Maikel Carballo',
  //   },
  //   {
  //     name: 'twitter:site',
  //     content: 'https://kimael-code.github.io/',
  //   },
  //   {
  //     name: 'twitter:creator',
  //     content: '@_kimael_',
  //   },
  //   {
  //     name: 'twitter:image',
  //     content:
  //       'https://pbs.twimg.com/profile_images/1361041473366601728/mYIfVGNd_400x400.jpg',
  //   },
  //   {
  //     name: 'twitter:description',
  //     content: 'Desarrollador Web Full Stack',
  //   },
  //   {
  //     name: 'description',
  //     content: 'Sitio Web Personal de Maikel Carballo',
  //   },
  //   {
  //     name: 'author',
  //     content: 'Maikel Carballo',
  //   },
  //   {
  //     name: 'keywords',
  //     content:
  //       'programador web, desarrollador web, full stack, portafolio, portfolio',
  //   },
  // ],
})
</script>

<template>
  <div>
    <Html :lang="$i18n.locale"></Html>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

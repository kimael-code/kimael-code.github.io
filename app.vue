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
})
</script>

<template>
  <div>
    <Html :lang="$i18n.locale"></Html>
    <NuxtLayout>
      <NuxtLoadingIndicator color="#0047e1" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

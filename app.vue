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
})
</script>

<template>
  <div>
    <Head>
      <Meta name="description" content="Sitio Web Personal de Maikel Carballo" />
      <Meta name="author" content="Maikel Carballo" />
      <Meta
        name="keywords"
        content="programador web, desarrollador web, full stack, portafolio, portfolio"
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content="Sitio Web Personal de Maikel Carballo" />
      <Meta property="og:url" content="https://kimael-code.github.io" />
      <Meta property="og:site_name" content="Maikel Carballo" />
      <Meta property="og:description" content="Sitio Web Personal de Maikel Carballo" />
      <Meta property="og:image" content="https://twitter.com/_kimael_/photo" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content="@_kimael_" />
      <Meta name="twitter:domain" content="twitter.com/_kimael_" />
      <Meta name="twitter:title" content="Desarrollador Web Full Stack" />
    </Head>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

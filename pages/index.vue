<template>
  <section class="hero is-primary is-fullheight is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <p class="heading has-text-dark">
          {{ $t('index.header.pretitle') }}
        </p>
        <h1 class="title is-1 has-text-dark is-handwritten">
          {{ $t('index.header.title') }}
        </h1>
        <h2 class="subtitle is-3 has-text-dark is-family-monospace">
          {{ $t('index.header.subtitle') }}
        </h2>
        <h3 class="subtitle has-text-dark">
          <div class="tags are-medium">
            <span class="tag is-rounded is-dark">Laravel</span>
            <span class="tag is-rounded is-dark">Inertia</span>
            <span class="tag is-rounded is-dark">Vue</span>
            <span class="tag is-rounded is-dark">Nuxt</span>
          </div>
        </h3>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

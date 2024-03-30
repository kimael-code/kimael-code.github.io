<script setup>
useHead({
  title: 'Contacto',
})
</script>

<template>
  <section class="section is-medium" id="contact">
    <div class="container">
      <div class="section-heading">
        <h3 class="title is-2">{{ $t('contact.title') }}</h3>
        <h4 class="subtitle is-5">{{ $t('contact.subtitle') }}</h4>
      </div>
      <br />

      <div class="fixed-grid">
        <div class="grid">
          <a class="cell has-text-centered" href="https://twitter.com/_kimael_" target="blank" rel="noreferrer noopener">
            <span class="icon is-large has-text-info">
              <FontAwesomeIcon :icon="['fab', 'x-twitter']" size="7x" />
            </span>
            <p class="heading">{{ $t('contact.xAbout') }}</p>
          </a>
          <a class="cell has-text-centered" href="https://www.linkedin.com/in/maikel-c-2314311a1/" target="blank" rel="noreferrer noopener">
            <span class="icon is-large has-text-info">
              <FontAwesomeIcon :icon="['fab', 'linkedin']" size="7x" />
            </span>
            <p class="heading">{{ $t('contact.linkedinAbout') }}</p>
          </a>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
      </div>
    </div>
  </section>
</template>

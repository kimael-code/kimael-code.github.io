<script setup>
useHead({
  title: 'Contacto',
})
</script>

<template>
  <section class="section is-medium" id="contact">
    <div class="container">
      <div class="section-heading">
        <h3 class="title is-2">{{ $t('index.contact.title') }}</h3>
        <h4 class="subtitle is-5">{{ $t('index.contact.subtitle') }}</h4>
      </div>
      <br />

      <div class="columns">
        <div class="column is-6 is-offset-3">
          <div class="box">
            <div class="buttons has-addons is-centered">
              <a
                class="button is-primary is-large has-text-dark"
                href="https://twitter.com/_kimael_"
                target="blank"
                rel="noreferrer noopener"
              >
                <span class="icon">
                  <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </span>
                <span>Twitter</span>
              </a>
            </div>
          </div>
          <div class="box">
            <div class="buttons has-addons is-centered">
              <a
                class="button is-primary is-large has-text-dark"
                href="https://www.linkedin.com/in/maikel-c-2314311a1/"
                target="blank"
                rel="noreferrer noopener"
              >
                <span class="icon">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

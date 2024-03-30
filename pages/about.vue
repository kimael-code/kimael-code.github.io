<script setup>
useHead({
  title: 'Quién Soy',
})
</script>

<template>
  <section class="section is-medium">
    <div class="section-heading">
      <h3 class="title is-2">{{ $t('whoami.title') }}</h3>
      <h4 class="subtitle is-5">{{ $t('whoami.subtitle') }}</h4>
    </div>
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <p class="content has-text-justified">
            {{ $t('whoami.aboutLine1') }}
            <br />
            <br />
            {{ $t('whoami.aboutLine2') }}
            <br />
            <br />
            {{ $t('whoami.aboutLine3') }}
          </p>
            <!-- <p>{{ $t('whoami.about') }}</p> -->
        </div>
        <div class="column is-one-third">
          <div class="container">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="https://pbs.twimg.com/profile_images/1361041473366601728/mYIfVGNd_400x400.jpg" alt="Maikel Carballo" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Maikel Carballo</p>
                    <p class="subtitle is-6">@_kimael_</p>
                  </div>
                </div>
                <p class="title has-text-info">{{ $t('whoami.cardProfile.title') }}</p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <a href="https://twitter.com/_kimael_" target="blank" rel="noreferrer noopener">
                    <span class="icon-text">
                      <span class="icon">
                        <FontAwesomeIcon :icon="['fab', 'x-twitter']" />
                      </span>
                      <span>X</span>
                    </span>
                  </a>
                </p>
                <p class="card-footer-item">
                  <a href="https://gitlab.com/profemaik" target="blank" rel="noreferrer noopener">
                    <span class="icon-text">
                      <span class="icon">
                        <FontAwesomeIcon :icon="['fab', 'gitlab']" />
                      </span>
                      <span>GitLab</span>
                    </span>
                  </a>
                </p>
                <p class="card-footer-item">
                  <a href="https://github.com/kimael-code" target="blank" rel="noreferrer noopener">
                    <span class="icon-text">
                      <span class="icon">
                        <FontAwesomeIcon :icon="['fab', 'github']" />
                      </span>
                      <span>GitHub</span>
                    </span>
                  </a>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

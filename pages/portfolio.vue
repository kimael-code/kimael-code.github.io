<script setup>
  useHead({
    title: 'Portafolio'
  })
</script>

<template>
  <section class="section is-medium" id="portfolio">
    <div class="container">
      <div class="section-heading">
        <h3 class="title is-2">{{ $t('index.portfolio.title') }}</h3>
        <h4 class="subtitle is-5">
          {{ $t('index.portfolio.subtitle') }}
        </h4>
      </div>
      <br />

      <div class="container portfolio-container">
        <div class="columns">
          <div class="column">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  <span>SCBmk Admin</span>
                  <div class="is-flex is-align-items-center pr-4">
                    <div class="tags">
                      <span class="tag is-danger">wip</span>
                      <span class="tag is-primary">codeigniter</span>
                    </div>
                  </div>
                </p>
              </header>
              <div class="card-content">
                <figure class="image">
                  <img
                    src="~/assets/images/scbmk-screenshot_users.jpg"
                    alt="Captura de pantalla SCBmk - Plantilla Admin"
                  />
                </figure>
              </div>
              <footer class="card-footer">
                <a
                  class="card-footer-item"
                  href="https://gitlab.com/profemaik/php-codeigniter-scbmk"
                  target="blank"
                  rel="noreferrer noopener"
                  >{{ $t('index.portfolio.source') }}</a
                >
              </footer>
            </div>

            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  <span>Estatus Contable</span>
                  <div class="is-flex is-align-items-center pr-4">
                    <div class="tags">
                      <span class="tag is-danger">wip</span>
                      <span class="tag is-primary">laravel</span>
                    </div>
                  </div>
                </p>
              </header>
              <div class="card-content">
                <figure class="image">
                  <img
                    src="~/assets/images/status-contable-screenshot.webp"
                    alt="Captura de pantalla Estatus Contable"
                  />
                </figure>
              </div>
              <footer class="card-footer">
                <a
                  class="card-footer-item"
                  href="https://gitlab.com/profemaik/status-contable"
                  target="blank"
                  rel="noreferrer noopener"
                  >{{ $t('index.portfolio.source') }}</a
                >
              </footer>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  <span>Mi Admin Usuarios</span>
                  <div class="is-flex is-align-items-center pr-4">
                    <div class="tags">
                      <span class="tag is-danger">wip</span>
                      <span class="tag is-primary">laravel</span>
                    </div>
                  </div>
                </p>
              </header>
              <div class="card-content">
                <figure class="image">
                  <img
                    src="~/assets/images/mi-admin-usuarios_screenshot_activities.jpg"
                    alt="Captura de Pantalla Mi Admin Usuarios"
                  />
                </figure>
              </div>
              <footer class="card-footer">
                <a
                  class="card-footer-item"
                  href="https://gitlab.com/profemaik/mi-admin-usuarios"
                  target="blank"
                  rel="noreferrer noopener"
                  >{{ $t('index.portfolio.source') }}</a
                >
              </footer>
            </div>

            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  <span>Gedezmp</span>
                  <div class="is-flex is-align-items-center pr-4">
                    <div class="tags">
                      <span class="tag is-success">v0.2.1</span>
                      <span class="tag is-primary">react</span>
                      <span class="tag is-primary">pwa</span>
                    </div>
                  </div>
                </p>
              </header>
              <div class="card-content">
                <figure class="image">
                  <img
                    src="~/assets/images/gedezmp_screenshot.jpg"
                    alt="Captura de pantalla Gedezmp"
                  />
                </figure>
              </div>
              <footer class="card-footer">
                <a
                  class="card-footer-item"
                  href="https://github.com/kimael-code/gedezmp-bulma"
                  target="blank"
                  rel="noreferrer noopener"
                  >{{ $t('index.portfolio.source') }}</a
                >
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio-container .card {
  margin-bottom: 2em;
}
</style>

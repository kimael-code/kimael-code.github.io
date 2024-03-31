<script setup>
useHead({
  title: 'Portafolio',
})

const show = ref(false)
</script>

<template>
  <section class="section is-medium" id="portfolio">
    <div class="container">
      <div class="section-heading">
        <h3 class="title is-2">{{ $t('portfolio.title') }}</h3>
        <h4 class="subtitle is-5">
          {{ $t('portfolio.subtitle') }}
        </h4>
      </div>
      <br />

      <div class="container portfolio-container">
        <div class="columns">
          <!-- COLUMNA IZQUIERDA -->
          <div class="column">
            <AppCard>
              <template #image>
                <img
                  src="~/assets/images/status-contable.webp"
                  alt="Captura de pantalla Estatus Contable"
                />
              </template>

              <template #title>
                <p class="card-header-title">Estatus Contable</p>
              </template>

              <template #content>
                <div class="content">
                  <div class="tags">
                    <span class="tag is-rounded is-danger">wip</span>
                    <span class="tag is-rounded is-primary">laravel</span>
                  </div>
                  <p>{{ $t('portfolio.estatusContable') }}</p>
                </div>
              </template>

              <template #footer>
                <a
                  class="card-footer-item"
                  href="https://gitlab.com/profemaik/status-contable"
                  target="blank"
                  rel="noreferrer noopener"
                >
                  <span class="icon-text">
                    <span class="icon">
                      <FontAwesomeIcon icon="fa-code" size="sm" />
                    </span>
                    <span>{{ $t('portfolio.source') }}</span
                    >&nbsp;
                    <span class="icon">
                      <FontAwesomeIcon
                        icon="fa-arrow-up-right-from-square"
                        size="2xs"
                      />
                    </span>
                  </span>
                </a>
              </template>
            </AppCard>

            <AppCard>
              <template #image>
                <img
                  src="~/assets/images/scbmk.jpg"
                  alt="Captura de pantalla SCBmk Admin"
                />
              </template>

              <template #title>
                <p class="card-header-title">SCBmk Admin</p>
              </template>

              <template #content>
                <div class="content">
                  <div class="tags">
                    <span class="tag is-rounded is-danger">wip</span>
                    <span class="tag is-rounded is-primary">codeigniter</span>
                  </div>
                  <p>{{ $t('portfolio.SCBmkAdmin') }}</p>
                </div>
              </template>

              <template #footer>
                <a
                  class="card-footer-item"
                  href="https://gitlab.com/profemaik/php-codeigniter-scbmk"
                  target="blank"
                  rel="noreferrer noopener"
                >
                  <span class="icon-text">
                    <span class="icon">
                      <FontAwesomeIcon icon="fa-code" size="sm" />
                    </span>
                    <span>{{ $t('portfolio.source') }}</span
                    >&nbsp;
                    <span class="icon">
                      <FontAwesomeIcon
                        icon="fa-arrow-up-right-from-square"
                        size="2xs"
                      />
                    </span>
                  </span>
                </a>
              </template>
            </AppCard>
          </div>

          <!-- COLUMNA CENTRAL -->
          <div class="column">
            <AppCard>
              <template #image>
                <img
                  src="~/assets/images/mi-admin-usuarios.jpg"
                  alt="Captura de Pantalla Mi Admin Usuarios"
                />
              </template>

              <template #title>
                <p class="card-header-title">Mi Admin Usuarios</p>
              </template>

              <template #content>
                <div class="content">
                  <div class="tags">
                    <span class="tag is-rounded is-danger">wip</span>
                    <span class="tag is-rounded is-primary">laravel</span>
                  </div>
                  <p>{{ $t('portfolio.miAdminUsuarios') }}</p>
                </div>
              </template>

              <template #footer>
                <a
                  class="card-footer-item"
                  href="https://gitlab.com/profemaik/mi-admin-usuarios"
                  target="blank"
                  rel="noreferrer noopener"
                >
                  <span class="icon-text">
                    <span class="icon">
                      <FontAwesomeIcon icon="fa-code" size="sm" />
                    </span>
                    <span>{{ $t('portfolio.source') }}</span
                    >&nbsp;
                    <span class="icon">
                      <FontAwesomeIcon
                        icon="fa-arrow-up-right-from-square"
                        size="2xs"
                      />
                    </span>
                  </span>
                </a>
              </template>
            </AppCard>
          </div>

          <!-- COLUMNA DERECHA -->
          <div class="column">
            <AppCard>
              <template #image>
                <img
                  src="~/assets/images/gedezmp.jpg"
                  alt="Captura de pantalla Gedezmp"
                />
              </template>

              <template #title>
                <p class="card-header-title">Gedezmp</p>
              </template>

              <template #content>
                <div class="content">
                  <div class="tags">
                    <span class="tag is-rounded is-success">v0.2.1</span>
                    <span class="tag is-rounded is-primary">react</span>
                    <span class="tag is-rounded is-primary">pwa</span>
                  </div>
                  <p>{{ $t('portfolio.gedezmp') }}</p>
                </div>
              </template>

              <template #footer>
                <a
                  class="card-footer-item"
                  href="https://github.com/kimael-code/gedezmp-bulma"
                  target="blank"
                  rel="noreferrer noopener"
                >
                  <span class="icon-text">
                    <span class="icon">
                      <FontAwesomeIcon icon="fa-code" size="sm" />
                    </span>
                    <span>{{ $t('portfolio.source') }}</span
                    >&nbsp;
                    <span class="icon">
                      <FontAwesomeIcon
                        icon="fa-arrow-up-right-from-square"
                        size="2xs"
                      />
                    </span>
                  </span>
                </a>
              </template>
            </AppCard>
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
@media (prefers-color-scheme: dark) {
  div p {
    color: var(--bulma-info);
  }
}
</style>

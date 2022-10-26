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
                  <p>Seguimiento de los ingresos y egresos de dinero.</p>
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
                  <p>
                    Plantilla para aplicaciones tipo dashboard. Construida con
                    CodeIgniter y la plantilla Bootstrap SB Admin 2.
                  </p>
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
                  <p>
                    Aplicación web para sistemas tipo dashboard. Construida con
                    Laravel 9 y basada en la plantilla HTML Bulma Admin
                    Dashboard Template.
                  </p>
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
                  <p>
                    Aplicación web que permite crear un archivo con extensión
                    <code>.zmp</code> a partir de un archivo <code>.csv</code>.
                    El archivo <code>.zmp</code> resultante puede ser usado para
                    ejecutar operaciones por lotes, vía terminal, en servidores
                    de correo Zimbra.
                  </p>
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
</style>

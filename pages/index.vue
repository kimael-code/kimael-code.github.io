<script setup></script>
<template>
  <div>
    <section class="hero is-dark is-fullheight is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <p class="heading">
            {{ $t('index.hero.pretitle') }}
          </p>
          <h1 class="title is-1 is-handwritten">
            {{ $t('index.hero.title') }}
          </h1>
          <h2 class="subtitle is-1 is-family-monospace">
            {{ $t('index.hero.subtitle') }}
          </h2>
          <h3 class="subtitle">
            <div class="tags are-medium">
              <span class="tag is-rounded is-info">Laravel</span>
              <span class="tag is-rounded is-info">Inertia.js</span>
              <span class="tag is-rounded is-info">Vue.js</span>
              <span class="tag is-rounded is-info">Nuxt.js</span>
              <span class="tag is-rounded is-info">Bulma CSS</span>
            </div>
          </h3>
        </div>
      </div>
    </section>

    <section class="section is-medium">
      <h3 class="title is-1 has-text-centered">{{ $t('index.section.skills.title') }}</h3>
      <br />
      <br />
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <span class="icon is-large">
              <FontAwesomeIcon :icon="['fab', 'php']" size="4x" />
            </span>
            <p class="heading">PHP</p>
            <progress class="progress is-info is-small" value="75" max="100">75%</progress>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <span class="icon is-large">
              <FontAwesomeIcon :icon="['fas', 'database']" size="4x" />
            </span>
            <p class="heading">PostgreSQL</p>
            <progress class="progress is-info is-small" value="60" max="100">60%</progress>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <span class="icon is-large">
              <FontAwesomeIcon :icon="['fab', 'docker']" size="4x" />
            </span>
            <p class="heading">Docker</p>
            <progress class="progress is-info is-small" value="60" max="100">60%</progress>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <span class="icon is-large">
              <FontAwesomeIcon :icon="['fab', 'js']" size="5x" />
            </span>
            <p class="heading">JavaScript</p>
            <progress class="progress is-info is-small" value="75" max="100">75%</progress>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <span class="icon is-large">
              <FontAwesomeIcon :icon="['fab', 'html5']" size="4x" />
            </span>
            <p class="heading">HTML</p>
            <progress class="progress is-info is-small" value="65" max="100">65%</progress>
          </div>
        </div>
      </nav>
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <span class="icon is-large">
              <FontAwesomeIcon :icon="['fab', 'laravel']" size="4x" />
            </span>
            <p class="heading">Laravel</p>
            <progress class="progress is-info is-small" value="75" max="100">75%</progress>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <span class="icon is-large">
              <FontAwesomeIcon :icon="['fab', 'vuejs']" size="4x" />
            </span>
            <p class="heading">VueJS</p>
            <progress class="progress is-info is-small" value="65" max="100">65%</progress>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <span class="icon is-large">
              <FontAwesomeIcon :icon="['fab', 'css3-alt']" size="4x" />
            </span>
            <p class="heading">CSS</p>
            <progress class="progress is-info is-small" value="40" max="100">40%</progress>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <span class="icon is-large">
              <FontAwesomeIcon :icon="['fab', 'sass']" size="4x" />
            </span>
            <p class="heading">SASS</p>
            <progress class="progress is-info is-small" value="40" max="100">40%</progress>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <span class="icon is-large">
              <FontAwesomeIcon :icon="['fab', 'git']" size="4x" />
            </span>
            <p class="heading">Git</p>
            <progress class="progress is-info is-small" value="30" max="100">30%</progress>
          </div>
        </div>
      </nav>
      <nav class="level">
        <div class="level-item">
          <span class="tag is-info is-rounded">Inertia.js</span>
        </div>
        <div class="level-item">
          <span class="tag is-info is-rounded">Nuxt.js</span>
        </div>
        <div class="level-item">
          <span class="tag is-info is-rounded">React.js</span>
        </div>
        <div class="level-item">
          <span class="tag is-info is-rounded">Bulma CSS</span>
        </div>
        <div class="level-item">
          <span class="tag is-info is-rounded">Bootstrap CSS</span>
        </div>
        <div class="level-item">
          <span class="tag is-info is-rounded">CodeIgniter</span>
        </div>
        <div class="level-item">
          <span class="tag is-info is-rounded">Docker Compose</span>
        </div>
        <div class="level-item">
          <span class="tag is-info is-rounded">Visual Studio Code</span>
        </div>
      </nav>
    </section>
    <section class="section is-medium">
      <h3 class="title is-1 has-text-centered">{{ $t('index.section.xp.title') }}</h3>
      <br />
      <br />
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="help">{{ $t('index.section.xp.position1.date') }}</p>
            <p class="title is-4 has-text-info">{{ $t('index.section.xp.position1.title') }}</p>
            <p class="subtitle is-6">UNE</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="help">{{ $t('index.section.xp.position2.date') }}</p>
            <p class="title is-4 has-text-info">{{ $t('index.section.xp.position2.title') }}</p>
            <p class="subtitle is-6">Contraloría Caracas</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="help">{{ $t('index.section.xp.position3.date') }}</p>
            <p class="title is-4 has-text-info">{{ $t('index.section.xp.position3.title') }}</p>
            <p class="subtitle is-6">Fogade</p>
          </div>
        </div>
      </nav>
    </section>

    <section class="section is-medium">
      <h3 class="title is-1 has-text-centered">{{ $t('index.section.schools.title') }}</h3>
      <br />
      <br />
      <div class="fixed-grid has-1-cols-mobile">
        <div class="grid">
          <div class="cell">
            <div>
              <p class="help">2011</p>
              <p class="title is-4 has-text-info">{{ $t('index.section.schools.university') }}</p>
              <p class="subtitle is-6">UPEL-IPC</p>
            </div>
          </div>
          <div class="cell">
            <div>
              <p class="help">2018</p>
              <p class="title is-4 has-text-info">{{ $t('index.section.schools.course1') }}</p>
              <p class="subtitle is-6">Universidad Rey Juan Carlos / Miríadax</p>
            </div>
          </div>
          <div class="cell">
            <div>
              <p class="help">2013</p>
              <p class="title is-4 has-text-info">{{ $t('index.section.schools.course2') }}</p>
              <p class="subtitle is-6">UNEWEB</p>
            </div>
          </div>
          <div class="cell">
            <div class="mr-6">
              <p class="help">2012</p>
              <p class="title is-4 has-text-info">{{ $t('index.section.schools.course3') }}</p>
              <p class="subtitle is-6">CENEAC-UCV</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.progress {
  height: 4px !important;
}
</style>

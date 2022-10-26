<script setup>
useHead({
  title: 'Quién Soy',
})
</script>

<template>
  <section class="section is-medium" id="about">
    <div class="section-heading">
      <h3 class="title is-2">{{ $t('whoami.title') }}</h3>
      <h4 class="subtitle is-5">{{ $t('whoami.subtitle') }}</h4>
      <div class="container">
        <p>{{ $t('whoami.about') }}</p>
      </div>
    </div>

    <div class="columns has-same-height is-gapless">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <h3 class="title is-4">
              {{ $t('whoami.cardProfile.title') }}
            </h3>

            <div class="content">
              <table class="table-profile">
                <tr>
                  <td>{{ $t('whoami.cardProfile.profileName') }}</td>
                  <td>{{ $t('whoami.cardProfile.profileValue') }}</td>
                </tr>
                <tr>
                  <td>{{ $t('whoami.cardProfile.jobName') }}</td>
                  <td>{{ $t('whoami.cardProfile.jobValue') }}</td>
                </tr>
                <tr>
                  <td>{{ $t('whoami.cardProfile.interestsName') }}</td>
                  <td>{{ $t('whoami.cardProfile.interestsValue') }}</td>
                </tr>
              </table>
            </div>
            <div class="buttons has-addons is-centered">
              <a
                class="button is-primary has-text-dark"
                href="https://twitter.com/_kimael_"
                target="blank"
                rel="noreferrer noopener"
              >
                <span class="icon is-small">
                  <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </span>
                <span>Twitter</span>
              </a>
              <a
                class="button is-primary has-text-dark"
                href="https://github.com/kimael-code"
                target="blank"
                rel="noreferrer noopener"
              >
                <span class="icon is-small">
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </span>
                <span>Github</span>
              </a>
              <a
                class="button is-primary has-text-dark"
                href="https://gitlab.com/profemaik"
                target="blank"
                rel="noreferrer noopener"
              >
                <span class="icon is-small">
                  <FontAwesomeIcon icon="fa-brands fa-gitlab" />
                </span>
                <span>Gitlab</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-16by9">
              <img
                src="~/assets/images/avatar-turquoise.svg"
                alt="Placeholder image"
              />
            </figure>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content skills-content">
            <h3 class="title is-4">
              {{ $t('whoami.cardSkills.title') }}
            </h3>
            <div class="content">
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{ $t('whoami.cardSkills.js') }}</strong>
                      <br />
                      <progress
                        class="progress is-primary"
                        value="80"
                        max="100"
                      ></progress>
                    </p>
                  </div>
                </div>
              </article>

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{ $t('whoami.cardSkills.vue') }}</strong>
                      <br />
                      <progress
                        class="progress is-primary"
                        value="60"
                        max="100"
                      ></progress>
                    </p>
                  </div>
                </div>
              </article>

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{ $t('whoami.cardSkills.html') }}</strong>
                      <br />
                      <progress
                        class="progress is-primary"
                        value="95"
                        max="100"
                      ></progress>
                    </p>
                  </div>
                </div>
              </article>

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{ $t('whoami.cardSkills.sql') }}</strong>
                      <br />
                      <progress
                        class="progress is-primary"
                        value="90"
                        max="100"
                      ></progress>
                    </p>
                  </div>
                </div>
              </article>

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{
                        $t('whoami.cardSkills.docker')
                      }}</strong>
                      <br />
                      <progress
                        class="progress is-primary"
                        value="70"
                        max="100"
                      ></progress>
                    </p>
                  </div>
                </div>
              </article>

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{ $t('whoami.cardSkills.php') }}</strong>
                      <br />
                      <progress
                        class="progress is-primary"
                        value="95"
                        max="100"
                      ></progress>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-foot">
      <div class="tags custom-tags">
        <span class="tag is-primary is-light">VueJS</span>
        <span class="tag is-primary is-light">JavaScript</span>
        <span class="tag is-primary is-light">HTML5</span>
        <span class="tag is-primary is-light">CSS3</span>
        <span class="tag is-primary is-light">Bulma</span>
        <span class="tag is-primary is-light">Bootstrap</span>
        <span class="tag is-primary is-light">jQuery</span>
        <span class="tag is-primary is-light">Laravel</span>
        <span class="tag is-primary is-light">CodeIgniter</span>
        <span class="tag is-primary is-light">SASS/SCSS</span>
        <span class="tag is-primary is-light">Docker Compose</span>
        <span class="tag is-primary is-light">Git</span>
        <span class="tag is-primary is-light">Laravel</span>
        <span class="tag is-primary is-light">PostgreSQL</span>
        <span class="tag is-primary is-light">Docker</span>
        <span class="tag is-primary is-light">Apache HTTP</span>
        <span class="tag is-primary is-light">VS Code</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 769px) {
  .has-same-height .card {
    height: 350px;
    overflow: auto;
  }
}

.card-content h3 {
  text-align: center;
}

.table-profile td,
th {
  border: none !important;
}

.table-profile td:first-of-type {
  font-weight: bold;
}

.skills-content .media {
  margin: 0 !important;
  padding: 4px !important;
  border: 0 !important;
}

.skills-content .progress {
  height: 4px !important;
}

.custom-tags {
  text-align: center !important;
  display: block;
}
</style>

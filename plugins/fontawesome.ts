import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBriefcase,
  faEnvelope,
  faHome,
  faLanguage,
  faSmile,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faGitlab,
  faLaravel,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faBriefcase,
  faEnvelope,
  faGithub,
  faGitlab,
  faHome,
  faLanguage,
  faLaravel,
  faLinkedin,
  faSmile,
  faTwitter,
)

export default defineNuxtPlugin(({ vueApp }) =>
  vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
)

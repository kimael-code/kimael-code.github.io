import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAngleDown,
  faAngleUp,
  faArrowUpRightFromSquare,
  faBriefcase,
  faCode,
  faDatabase,
  faEnvelope,
  faHeart,
  faHome,
  faInfo,
  faInfoCircle,
  faLanguage,
  faReply,
  faRetweet,
  faSmile,
  faSquareArrowUpRight,
  faSquareUpRight,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import {
  faCss3Alt,
  faDocker,
  faGit,
  faGithub,
  faGitlab,
  faHtml5,
  faJs,
  faLaravel,
  faLinkedin,
  faPhp,
  faSass,
  faSquareXTwitter,
  faTwitter,
  faVuejs,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

library.add(
  faAngleDown,
  faAngleUp,
  faArrowUpRightFromSquare,
  faBriefcase,
  faCode,
  faCss3Alt,
  faDatabase,
  faDocker,
  faEnvelope,
  faGit,
  faGithub,
  faGitlab,
  faHeart,
  faHome,
  faHtml5,
  faInfo,
  faInfoCircle,
  faJs,
  faLanguage,
  faLaravel,
  faLinkedin,
  faPhp,
  faReply,
  faRetweet,
  faSass,
  faSmile,
  faSquareArrowUpRight,
  faSquareUpRight,
  faSquareXTwitter,
  faTwitter,
  faUpRightFromSquare,
  faVuejs,
  faXTwitter,
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})

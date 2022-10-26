import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAngleDown,
  faAngleUp,
  faArrowUpRightFromSquare,
  faBriefcase,
  faCode,
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
  faGithub,
  faGitlab,
  faLaravel,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faAngleDown,
  faAngleUp,
  faArrowUpRightFromSquare,
  faBriefcase,
  faCode,
  faEnvelope,
  faGithub,
  faGitlab,
  faHeart,
  faHome,
  faInfo,
  faInfoCircle,
  faLanguage,
  faLaravel,
  faLinkedin,
  faReply,
  faRetweet,
  faSmile,
  faSquareArrowUpRight,
  faSquareUpRight,
  faTwitter,
  faUpRightFromSquare,
)

export default defineNuxtPlugin(({ vueApp }) =>
  vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
)

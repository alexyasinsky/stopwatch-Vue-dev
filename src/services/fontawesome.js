import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPlay} from "@fortawesome/free-solid-svg-icons";
import { faPause} from "@fortawesome/free-solid-svg-icons";
import { faStop} from "@fortawesome/free-solid-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faPause, faStop, faPlus);

export default FontAwesomeIcon;
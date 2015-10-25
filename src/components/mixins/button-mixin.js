import {mdIcon} from '../commons/index.js';
export default {
    btnIcon: {
        props: {
            iconText: String,
            reveal:Boolean
        },
        components: {
            "md-icon": mdIcon
        }
    }
}

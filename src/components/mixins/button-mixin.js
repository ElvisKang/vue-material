import {mdIcon} from '../commons/index.js';
export default {
    btnIcon:{
        props:{
            iconText:String,
            iconPos:{
                type:String,
                default:"left"
            }
        },
        components:{
            "md-icon":mdIcon
        }
    }
}
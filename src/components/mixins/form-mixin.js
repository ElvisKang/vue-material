import {mdIcon}from '../commons/index.js';
let basicAttr = {
    props: {
        id: {
            type:String,
            default:''
        },
        name: {
            type:String,
            default:''
        },
        placeholder: {
            type:String,
            default:''
        },
        value: {
            type:String,
            default:''
        }
    }
};
let status = {
    props: {
        checked:Boolean,
        disabled: Boolean,
        required: Boolean,
    }
};
let formIcon = {
    props: {
        iconText: String,
        iconPos:{
            type:String,
            default:"prefix"
        }
    },
    components: {
        'md-icon': mdIcon
    }
};
let actLabel = {
    computed:{
        labelActive(){
                return (this.mdValue || this.placeholder || this.focus);
            }
    },
};
export default {
    basicAttr,
    formIcon,
    status,
    actLabel,
}

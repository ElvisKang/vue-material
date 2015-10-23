import {mdIcon}from '../commons/index.js';
let basicAttr = {
    replace: false,
    props: {
        id: String,
        name: String,
        placeholder: String,
        value: {
            type:String,
            twoWay:true
        },
    }
};
let status = {
    props: {
        checked:Boolean,
        disabled: Boolean,
        required: Boolean,
    }
}
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
}
export default {
    basicAttr,
    formIcon,
    status,
}

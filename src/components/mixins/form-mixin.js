import {mdIcon}from '../commons/index.js';
let basicAttr = {
    replace: false,
    props: {
        id: String,
        label: String,
        name: String,
        placeholder: String,
        value: String,
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

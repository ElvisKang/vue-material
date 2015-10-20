import md-icon from './commons/md-icon.vue';
let basic = {
    replace:false,
    props: {
        id: String,
        label: String,
        name: String,
        placeholder: String,
        value: String,
        disabled: Boolean,
        required:Boolean
    }
};

let formIcon = {
    props:{
         iconText: String
    },
    components:{
        md-icon
    },
    computed:{
        icon(){
            let iconText = this.iconText;
            if(iconText){
                return {
                    text:iconText,
                    pos:"prefix"
                } 
            }
            return null;
        }
    }
}
export default {
    basic,
    formIcon
}

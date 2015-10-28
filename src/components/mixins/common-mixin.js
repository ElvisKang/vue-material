import mdIcon from '../commons/md-icon.vue';
export default {
    hasIcon: {
        props: {
            iconText: String,
            iconPos:String
        },
        components: {
            "md-icon": mdIcon
        }
    },
    hasImg:{
        props:{
            imgSrc:String,
            imgAlt:String
        }
    }
}
import mdCardAction from '../cards/md-card-action.vue';
import mdCardContent from '../cards/md-card-content.vue';
import mdCardImg from '../cards/md-card-img.vue';
import mdCardTitle from '../cards/md-card-title.vue';
export default {

    basic: {
        props:{
            options:Object,
            reveal:Boolean
        },
        components: {
            'md-card-action': mdCardAction,
            'md-card-content': mdCardContent,
            'md-card-title': mdCardTitle,
            'md-card-img': mdCardImg
        }
    }
}

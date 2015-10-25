import mdCardAction from '../card/md-card-action.vue';
import mdCardContent from '../card/md-card-content.vue';
import mdCardImg from '../card/md-card-img.vue';
import mdCardTitle from '../card/md-card-title.vue';
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

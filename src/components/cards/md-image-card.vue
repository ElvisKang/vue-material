<template>
<div class="card">
    <md-card-img v-if="options.imgSrc" :src="options.imgSrc"  :reveal="reveal">
        <md-card-title v-if="! reveal" :class="options.title.class">
            {{options.title.text}}
        </md-card-title>
    </md-card-img>
    <md-card-content  :class="options.content.class">
        <md-card-title v-if="reveal" :class="options.title.class">
            {{options.title.text}}
        </md-card-title>
        <p>{{options.content.text}}</p>
    </md-card-content>
    <md-card-action v-if="! reveal":links="options.links">
        <slot name="links"></slot>
    </md-card-action> 
    <slot name="reveal"></slot>
</div>
</template>

<script type="babel">
import {basic} from '../mixins/card-mixin.js';
export default {
    mixins:[basic]
}
</script>
<template>
    <div class="card">
        <md-card-content>
            <md-card-title :class="options.title.class" :reveal="reveal">
            {{options.title.text}}       
            </md-card-title>
            <p>{{options.content.text}}</p>
        </md-card-content>
        <md-card-action v-if="! reveal" :links="options.links" >
            <slot name="links"></slot>
        </md-card-action>
        <slot name="reveal"></slot>    
    </div>
</template>

<script lang="babel">
import {basic} from '../mixins/card-mixin.js';
export default {
    mixins:[basic]
}
</script>
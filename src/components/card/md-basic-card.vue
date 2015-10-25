<template>
    <div class="card">
        <md-card-content :class="options.content.class">
            <md-card-title :class="options.title.class"  slot="title">
            {{options.title.text}}
            <i  v-if="reveal"  slot="icon" class="material-icons right">more_vert</i>
            </md-card-title>
            <slot name="content">
                {{options.content.text}}     
            </slot>
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
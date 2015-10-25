<template>
<div class="card-reveal">
  <md-card-title  :class="options.title.class" reveal>
        {{options.title.text}}
        <i slot="icon" class="material-icons right" >close</i>
  </md-card-title>
  <slot name="reveal-content">
      <p :class="options.content.class">{{options.content.text}}</p>
  </slot>
</div> 
</template>

<script type="babel">
import mdCardTitle from './md-card-title.vue';
export default {
    props:{
        options:Object
    },
    components:{
        'md-card-title':mdCardTitle
    }
}
</script>
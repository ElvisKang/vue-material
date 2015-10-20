<template>
<div class="card">
    <md-card-img  :img="img" :is-reveal="true" >
    </md-card-img>
    <md-card-content :content="content">
        <md-card-title slot="title"  :title="title">
            <i class="material-icons right" slot="icon">more_vert</i>
        </md-card-title>
    </md-card-content>
    <div class="card-reveal">
      <md-card-title  :title="revealTitle">
            <i slot="icon" class="material-icons right" >close</i>
      </md-card-title>
      <p>{{revealContent}}</p>
    </div>
</div>
</template>

<script type="babel">
import mixin from './mixin.js';
export default {
    mixins:[mixin],
    data(){
        return {
            title:"",
            content:"",
            revealTitle:"",
            revealContent:""
            img:null,
            links:null
        }
    }
}
</script>
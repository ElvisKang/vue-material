<template>
<div class="card">
    <md-card-img  :img="img" >
        <md-card-title slot="title"  :title-text="title"></md-card-title>
    </md-card-img>
    <md-card-content :content="content"></md-card-content>
    <md-card-action :links="links"></md-card-action> 
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
            img:null,
            links:null
        }
    }
}
</script>
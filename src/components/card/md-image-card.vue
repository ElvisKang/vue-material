<template>
<div class="card">
    <md-card-img  :img-src="imgSrc" >
        <md-card-title slot="title"  :title-text="title"></md-card-title>
    </md-card-img>
    <md-card-content :content="content"></md-card-content>
    <md-card-action :links="links"></md-card-action> 
</div>
</template>

<script type="babel">
import {basic} from '../mixins/card-mixin.js';
export default {
    mixins:[basic],
    data(){
        return {
            title:"",
            content:"",
            imgSrc:"",
            links:null
        }
    }
}
</script>
<template>
<div class="card">
    <md-card-content :content="content">
        <md-card-title :title-text="title" slot="title"></md-card-title>
    </md-card-content>
    <md-card-action :links="links" ></md-card-action>
</div>
</template>

<script lang="babel">
import mixin from './mixin.js';
export default {
    mixins:[mixin],
    data(){
        return {    
            content:"",
            title:"",
            links:[]
        }
    }
}
</script>
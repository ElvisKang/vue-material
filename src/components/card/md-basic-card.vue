<template>
<div class="card">
    <md-card-content :content="content">
        <md-card-title :title-text="title" slot="title"></md-card-title>
    </md-card-content>
    <md-card-action :links="links" ></md-card-action>
</div>
</template>

<script lang="babel">
import {basic} from '../mixins/card-mixin.js';
export default {
    mixins:[basic],
    data(){
        return {    
            content:"",
            title:"",
            links:[]
        }
    }
}
</script>
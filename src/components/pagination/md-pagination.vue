<template>
<ul class="pagination">
    <li :class="{noPrevious?'disable':itemEffect}"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
    <li  v-for="item in items"  :class="[$index === currentPage?'active':itemEffect]">
        <a :href="item.href" @click="setCurrentPage($index+1)">{{$index+1}}</a>
    </li>
    <li :class="{noNext?'disable':itemEffect}"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
</ul>
</template>

<script type="babel">
export default {
    props:{
        currentPage:{
            twoWay=true,
            type:Number
        }
    }
    data(){
        return {
            max:10,
            items:[]
        }
    },
    methods:{
        setCurrentPage :(value) =>this.currentPage = value;

    }
    computed:{
        noPrevious:()=>currentPage===1,
        noNext:()=>currentPage === this.items.length
    }
}
</script>
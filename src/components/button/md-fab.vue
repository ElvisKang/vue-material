<template>
<div class="fixed-action-btn" :style="pos">
</div>
</template>

<script type="babel">
export default {
    props:{
        btnPos:Object
    },
    computed:{
        pos(){
            let result = {};
            for(let i in this.btnPos) {
                if(typeof i === "number"){
                    result[i] = 
                }
            }
        }
    }
}
</script>
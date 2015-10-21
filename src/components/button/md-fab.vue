<template>
<div class="fixed-action-btn" :style="pos">
    <slot name="main-icon"></slot>
    <slot name="sub-icons"></slot>
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
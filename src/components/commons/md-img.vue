<template>
    <img v-if="img" :src="img.src" :alt="img.alt" >
</template>
<script type="babel">
export default {
    props: {
        img:{
            require:true,
            type:Object,
            validate:(obj)=>{
                let src = obj && obj.src;
                return ( typeof src === "string" && src !== "");
            }
        }
    }
}
</script>
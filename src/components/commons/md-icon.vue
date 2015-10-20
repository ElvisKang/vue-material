<template>
    <i v-if="icon" :class="['material-icons',icon.pos]">{{icon.text}}</i>
</template>

<script type="babel">
export default {
    props: {
        icon:{
            require:true,
            type:object,
            validate:(obj)=>{
                let text = obj && obj.text;
                return ( typeof text === "string" && text !== "");
            }
        }
    }
}
</script>
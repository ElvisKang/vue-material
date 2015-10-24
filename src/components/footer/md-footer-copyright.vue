<template>
<div class="footer-copyright">
            <div class="container">
                <slot>
                    <span :class="[textClass]">{{options.text}}</span>
                    <a :class="[options.link.linkClass,'right']" :href="options.link.href">{{options.link.text}}
                    </a>
                </slot>
            </div>
 </div> 
</template>

<script type="babel">
export default {
    props:{
        options:Object
        }
    }
</script>
<template>
<div class="footer-copyright">
            <div class="container">
                {{copyright.content}}
                <a :href="copyright.href">{{copyright.linkText}}
                </a>
            </div>
 </div> 
</template>

<script type="babel">
export default {
    props:{
        copyright:Object
        }
    }
</script>
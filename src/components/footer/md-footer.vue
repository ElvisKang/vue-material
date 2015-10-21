<template>
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <md-footer-content :content="content">
                        <slot name="title">
                            <h5>{{title}}</h5>
                        </slot>
                    </md-footer-content>
                </div>
               <div class="col l4 offset-l2 s12">
                <md-footer-links :link-list="linkList">
                        <slot name="title">
                            <h5>{{listTitle}}<title/h5>
                        </slot>
                </md-footer-links>
                </div>
            </div>
        </div>
        <md-footer-copyright :copyright="copyright" ></md-footer-copyright>
    </footer>
</template>
<script type="babel">
export default {
    data(){
        return {
            title:"",
            listTitle:"",
            content:"",
            linkList:null,
            copyright:null
        }
    }
}   
</script>
<template>
<div :class="divCol">
    <slot name="title">
      <h5 :class="[options.titleClass]">{{options.title}}</h5>
    </slot>
    <slot name="links">
      <ul>
          <li v-for="link in options.links">
              <a :href="link.href"  :class="[options.linkClass]">
                  {{link.text}}
              </a>
          </li>
      </ul>
    </slot>
</div>
</template>

<script type="babel">
export default {
     props:{
          options:Object
     },
      computed:{
          divCol(){
              return  `col ${this.options.col}`;
          }
      }
}
</script>
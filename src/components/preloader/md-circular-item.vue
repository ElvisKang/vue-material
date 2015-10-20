<template>
<div :class="['spinner-layer',color]">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
   </div>
</template>

<script type="babel">
export default {
	props:{
		color:String
	}
}
</script>
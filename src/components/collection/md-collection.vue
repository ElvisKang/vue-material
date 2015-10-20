<template>
	<template v-if="notLink">
		<ul class="['collection',hasHeader?'with-header':'']">
			<li v-if="hasHeader" class="collection-header">
				<slot name="header"> </slot>
			</li>
			<li v-for="item in items" class="collection-item">
				{{item.text}}
				<a v-if="item.href" :href="item.href" class="secondary-content">
				</a>
			</li>
		</ul>
	</template>
	<template v-else>
		<div class="collection">
		<!-- how to add active class -->
		        <a  v-for="item in items" :href="item.href" class="collection-item active">{{item.text}}</a>
     		 </div>
	</template>
</template>

<script type="babel">
export default {
	data(){
		return {
			items:[],
			hasHeader:false,
			notLink:true
		}
	}
}
</script>
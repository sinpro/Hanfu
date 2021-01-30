<template>
	<div id="app">
		<transition name="fadeIn">
			<template v-if="$route.meta.keepAlive">
				<keep-alive >
			        <router-view></router-view>
			    </keep-alive>
			</template>
			<template v-else>
				<router-view></router-view>
			</template>
	    </transition>
	</div>
</template>
<script>
export default {
	name:'App',
	data(){
		return {
			
		}
	},
	mounted(){
		// if(process.env.NODE_ENV==='development'){
		// 	window.app=this;
		// }
		console.log(process.env.NODE_ENV,'process.env.NODE_ENV')
		console.log(systemCONFIG,'systemCONFIG')
	},
}	
</script>

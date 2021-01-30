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
<<<<<<< HEAD
		// console.log(process.env.NODE_ENV,'process.env.NODE_ENV')
		// console.log(ENV_CONFIG,'ENV_CONFIG')
=======
		console.log(process.env.NODE_ENV,'process.env.NODE_ENV')
		console.log(systemCONFIG,'systemCONFIG')
>>>>>>> 3551c326535700e48a21f61e309146a16bc00906
	},
}	
</script>

<template>
	<div id="app" class="app">
		<Header />
		<div class="app__content">
			<router-view />
		</div>
	</div>
</template>

<script>
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

import Header from "@/components/Header.vue";

export default {
	components: {
		Header,
	},
};
</script>

<style lang="scss">
	.app {
		&__content {
			position: relative;
			margin-top: var(--header-height);
		}
	}
</style>
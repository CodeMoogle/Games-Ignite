<template>
	<div id="app" class="app">
		<Header />
		<div class="app__content">
			<PageLoader />
			<router-view />
		</div>
	</div>
</template>

<script>
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

import Header from "@/components/Header.vue";
import PageLoader from "@/components/Utils/PageLoader.vue";

export default {
	components: {
		Header,
		PageLoader,
	},
};
</script>

<style lang="scss">
	.app {
		&__content {
			position: relative;
			margin-top: var(--header-height);
			margin-bottom: 1rem;
		}
	}
</style>
<template>
	<div class="page-loader" v-if="pageIsLoading">
		<div class="lds-dual-ring"></div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "PageLoader",
	computed: {
		...mapGetters(["pageIsLoading"]),
	},
};
</script>

<style lang="scss">
	.page-loader {
		position: fixed;
		width: 100%;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 999;
	}
	.lds-dual-ring {
		display: inline-block;
		width: 80px;
		height: 80px;
	}
	.lds-dual-ring:after {
		content: " ";
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid #fff;
		border-color: var(--color-themed) transparent var(--color-themed) transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
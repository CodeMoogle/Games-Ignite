<template>
	<section class="details__platforms">
		<h2>Platforms</h2>
		<div class="platforms">
			<span class="platforms__item" v-for="icon in icons" :key="icon.id">
				<i :class="`${getIcon(icon.platform.slug)}`"></i>
				<span>{{ icon.platform.name }}</span>
			</span>
		</div>
	</section>
</template>

<script>
import { getPlatformImg } from "@/utils/game.js";

export default {
	name: "DetailsPlatforms",
	props: {
		icons: {
			type: Array,
			required: true,
		},
	},
	methods: {
		getIcon: (platform) => getPlatformImg(platform),
	},
};
</script>

<style lang="scss">
	.platforms {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		&__item {
			min-width: 160px;
			text-align: center;
			padding: 5px;
			background-color: #fff;
			color: var(--text-accent);
			border-radius: 0.5rem;
			font-weight: bold;
			font-size: 0.9rem;
			margin: 0.5rem 0.5rem 0.5rem 0;
			& i {
				margin-right: 0.5rem;
				font-size: 1.1rem;
				vertical-align: middle;
			}
		}
	}
</style>
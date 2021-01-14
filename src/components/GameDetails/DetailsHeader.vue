<template>
	<div class="details-header">
		<div
			class="header__art"
			:style="{
				backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${detailsBackground})`,
			}"
		></div>

		<div class="header__content">
			<h2 class="header__title">{{ title }}</h2>

			<div class="header__platforms">
				<i
					v-for="platform in platforms"
					:key="platform.id"
					:class="`${getIcon(platform.platform.slug)}`"
				></i>
			</div>

			<p class="header__release">Release: {{ releaseDate || "TBA" }}</p>

			<p class="header__rating">RAWG Rating: {{ rating || `Not rated` }}</p>
		</div>
	</div>
</template>

<script>
import { getSmallerImg, getPlatformImg } from "@/utils/game.js";

export default {
	name: "DetailsHeader",
	props: {
		backgroundImage: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		platforms: {
			type: Array,
			required: true,
		},
		released: {
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
	},
	computed: {
		detailsBackground() {
			return getSmallerImg(this.backgroundImage, 1280);
		},
		releaseDate() {
			if (this.released) return this.released.split("-").reverse().join("-");
		},
	},
	methods: {
		getIcon: (platform) => getPlatformImg(platform),
	},
};
</script>

<style lang="scss">
	.details__header {
		position: relative;
		min-height: 400px;
	}
	.header__art {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 400px;
		background-color: transparent;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: top center;
		z-index: 1;
	}
	.header__content {
		position: relative;
		min-height: 400px;
		z-index: 10;
	}
	.header__title {
		font-size: 2rem;
		margin-bottom: 2rem;
	}
	.header__platforms {
		display: flex;
		align-items: center;
		margin-bottom: 2rem;
		& i {
			margin-right: 0.5rem;
		}
	}
	.header__release {
		margin-bottom: 2rem;
	}
	.header__rating {
		margin-bottom: 2rem;
	}
</style>
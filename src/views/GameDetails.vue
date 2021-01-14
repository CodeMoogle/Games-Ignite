<template>
	<div class="game-details">
		<DetailsHeader
			:backgroundImage="this.gameDetails.background_image"
			:title="this.gameDetails.name"
			:platforms="this.gameDetails.parent_platforms"
			:released="this.gameDetails.released"
			:rating="this.gameDetails.rating"
		/>

		<section class="game-details__description">
			<h3>About</h3>
			<p v-html="this.gameDetails.description"></p>
		</section>

		<section class="game-details__platforms">
			<h3>Platforms</h3>
			<div class="platforms">
				<span
					class="platforms__item"
					v-for="platform in this.gameDetails.platforms"
					:key="platform.id"
				>
					<i :class="`${getIcon(platform.platform.slug)}`"></i>
					<span>{{ platform.platform.name }}</span>
				</span>
			</div>
		</section>

		<DetailsGallery :screenshots="this.gameDetails.screenshots" />
	</div>
</template>

<script>
import { getSmallerImg, getPlatformImg } from "@/utils/game.js";
import { mapGetters } from "vuex";

import DetailsHeader from "@/components/GameDetails/DetailsHeader.vue";
import DetailsGallery from "@/components/GameDetails/DetailsGallery.vue";

export default {
	name: "GameDetails",
	components: {
		DetailsHeader,
		DetailsGallery,
	},
	computed: {
		...mapGetters(["gameDetails"]),
	},
	methods: {
		getCropImg: (path, size) => getSmallerImg(path, size),
		getIcon: (platform) => getPlatformImg(platform),
	},
};
</script>

<style lang="scss">
	.game-details {
		color: var(--text-primary);
		padding: 1rem 0.5rem;
		& h3 {
			font-size: 1.6rem;
			background: -webkit-linear-gradient(#ffdc99, #ff7a00);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			padding: 0;
			margin-bottom: 1rem;
		}
		& section {
			margin-bottom: 3rem;
		}
	}

	.game-details__description {
		white-space: pre-line;
		line-height: 1.5;
	}

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

	@media screen and (min-width: 60rem) {
		.game-details__art {
			height: 500px;
		}
		.game-details__header {
			min-height: 500px;
		}
		.game-details__title {
			font-size: 3rem;
		}
		.game-details__description {
			font-size: 1.1rem;
		}
	}
</style>
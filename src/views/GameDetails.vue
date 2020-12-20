<template>
	<div class="game-details">
		<div
			class="game-details__art"
			:style="{
				backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${detailsBackground})`,
			}"
		></div>
		<div class="game-info">
			<div class="game-info__header">
				<h2>{{ this.gameDetails.name }}</h2>
				<!-- TODO: platfroms component -->
				<div class="platforms">
					Platforms:
					<span
						v-for="platform in this.gameDetails.platforms"
						:key="platform.id"
					>
						<span>{{ platform.platform.name }}</span>
					</span>
				</div>
				<p>Rating: {{ this.gameDetails.rating }}</p>
			</div>

			<div class="game-info__description">
				<p>{{ this.gameDetails.description_raw }}</p>
			</div>

			<div class="game-info__gallery">
				<img
					v-for="screenshot in this.gameDetails.screenshots"
					:src="getCropImg(screenshot.image)"
					alt="screenshot"
					:key="screenshot.id"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { getSmallerImg } from "@/utils/game.js";
import { mapGetters } from "vuex";

export default {
	name: "GameDetails",
	computed: {
		...mapGetters(["gameDetails"]),
		detailsBackground() {
			return getSmallerImg(this.gameDetails.background_image, 1280);
		},
	},
	methods: {
		getCropImg: (path, size) => getSmallerImg(path, size),
	},
};
</script>

<style lang="scss">
	.game-details {
		position: relative;
		width: 100%;
		min-height: 100vh;
		background: #151515;
		&__art {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 500px;
			background-color: transparent;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: top center;
			z-index: 1;
		}
	}

	.game-info {
		position: relative;
		width: 100%;
		min-height: 100vh;
		color: #fff;
		padding: 1rem;
		z-index: 10;

		& img {
			width: 100%;
		}

		&__header {
		}

		&__gallery {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
			grid-column-gap: 1rem;
			grid-row-gap: 1rem;
		}
	}
</style>
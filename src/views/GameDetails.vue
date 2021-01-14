<template>
	<div class="game-details">
		<div
			class="game-details__art"
			:style="{
				backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${detailsBackground})`,
			}"
		></div>

		<div class="game-details__content">
			<div class="game-details__header">
				<h2 class="game-details__title">{{ this.gameDetails.name }}</h2>

				<div class="game-details__parent-platforms">
					<i
						v-for="platform in this.gameDetails.parent_platforms"
						:key="platform.id"
						:class="`${getIcon(platform.platform.slug)}`"
					></i>
				</div>

				<p class="game-details__release">Release: {{ releaseDate || "TBA" }}</p>

				<p class="game-details__rating">
					RAWG Rating: {{ this.gameDetails.rating || `Not rated` }}
				</p>
			</div>

			<section class="game-details__description">
				<h3>About</h3>
				<p>{{ this.gameDetails.description_raw }}</p>
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

			<h3>Screenshots</h3>
			<div class="game-details__gallery">
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
import { getSmallerImg, getPlatformImg } from "@/utils/game.js";
import { mapGetters } from "vuex";

export default {
	name: "GameDetails",
	computed: {
		...mapGetters(["gameDetails"]),
		detailsBackground() {
			return getSmallerImg(this.gameDetails.background_image, 1280);
		},
		releaseDate() {
			if (this.gameDetails.released)
				return this.gameDetails.released.split("-").reverse().join("-");
		},
	},
	methods: {
		getCropImg: (path, size) => getSmallerImg(path, size),
		getIcon: (platform) => getPlatformImg(platform),
	},
};
</script>

<style lang="scss">
	.game-details {
		position: relative;
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
			margin-bottom: 2rem;
		}
	}
	.game-details__art {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 400px;
		background-color: transparent;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: top;
	}

	.game-details__content {
		position: relative;
		color: var(--text-primary);
		padding: 1rem;
		z-index: 10;
		& img {
			display: block;
			width: 100%;
		}
	}

	.game-details__header {
		min-height: 400px;
	}

	.game-details__title {
		font-size: 2rem;
		margin-bottom: 2rem;
	}

	.game-details__parent-platforms {
		display: flex;
		align-items: center;
		margin-bottom: 2rem;
		& i {
			margin-right: 0.5rem;
		}
	}

	.game-details__release {
		margin-bottom: 2rem;
	}

	.game-details__rating {
		margin-bottom: 2rem;
	}

	.game-details__description {
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

	.game-details__gallery {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		column-gap: 1rem;
		row-gap: 1rem;
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
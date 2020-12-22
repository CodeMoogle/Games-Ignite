<template>
	<div class="game-details">
		<div
			class="game-details__art"
			:style="{
				backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${detailsBackground})`,
			}"
		></div>
		<div class="game-details__info">
			<div class="info__header">
				<h2>{{ this.gameDetails.name }}</h2>

				<div class="info__parent-platforms">
					<i
						v-for="platform in this.gameDetails.parent_platforms"
						:key="platform.id"
						:class="`${getIcon(platform.platform.slug)}`"
					></i>
				</div>

				<p>Rating: {{ this.gameDetails.rating }}</p>
			</div>

			<div class="info__description">
				<p>{{ this.gameDetails.description_raw }}</p>
			</div>

			<!-- TODO: platfroms component -->
			<div class="platforms">
				Platforms:
				<span
					class="platforms__item"
					v-for="platform in this.gameDetails.platforms"
					:key="platform.id"
				>
					<i :class="`${getIcon(platform.platform.slug)}`"></i>
					<span>{{ platform.platform.name }}</span>
				</span>
			</div>

			<div class="info__gallery">
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
		width: 100%;
		min-height: 100vh;

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

		&__info {
			position: relative;
			width: 100%;
			min-height: 100vh;
			color: #fff;
			padding: 1rem;
			z-index: 10;
			& img {
				width: 100%;
			}

			.info {
				&__parent-platforms {
					display: flex;
					align-items: center;
					font-size: 1.5rem;
					& i {
						margin-right: 0.5rem;
					}
				}

				&__gallery {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
					grid-column-gap: 1rem;
					grid-row-gap: 1rem;
				}
			}
		}
	}

	.platforms {
		margin: 1rem 0;
		&__item {
			padding: 5px 10px;
			background-color: #fff;
			color: var(--text-accent);
			border: 1px solid var(--bg-secondary);
			border-radius: 0.5rem;
			font-weight: bold;
			margin-right: 0.5rem;
			font-size: 0.8rem;
			& i {
				margin-right: 0.5rem;
				font-size: 1rem;
				vertical-align: middle;
			}
		}
	}
</style>
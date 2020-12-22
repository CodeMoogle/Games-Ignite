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
				<h2 class="header-title">{{ this.gameDetails.name }}</h2>

				<div class="header__parent-platforms">
					<i
						v-for="platform in this.gameDetails.parent_platforms"
						:key="platform.id"
						:class="`${getIcon(platform.platform.slug)}`"
					></i>
				</div>

				<span class="header__release">
					{{ this.gameDetails.released }}
				</span>

				<p class="header__rating">
					Rating: {{ this.gameDetails.rating || `N/A` }}
				</p>
			</div>

			<h3>About</h3>
			<div class="info__description">
				<p>{{ this.gameDetails.description_raw }}</p>
			</div>

			<!-- TODO: platfroms component -->
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

			<h3>Screenshots</h3>
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
		& h2 {
			font-size: 4rem;
		}
		& h3 {
			font-size: 2rem;
			padding: 0;
			margin-bottom: 1rem;
		}

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
			color: var(--text-primary);
			padding: 1rem;
			z-index: 10;
			& img {
				display: block;
				width: 100%;
			}

			.info {
				&__header {
					width: 100%;
					height: 500px;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					font-size: 1.3rem;
					.header {
						&-title {
							margin: 1rem 0;
						}
						&__parent-platforms {
							display: flex;
							align-items: center;
							// font-size: 2rem;
							margin: 1rem 0;
							& i {
								margin-right: 0.5rem;
							}
						}
						&__release {
							padding: 5px 10px;
							background-color: #fff;
							color: var(--text-accent);
							border-radius: 0.5rem;
							font-weight: bold;
							margin: 1rem 0;
						}
						&__rating {
							margin: 1rem 0;
						}
					}
				}

				&__description {
					font-size: 1.1rem;
					line-height: 1.5;
					margin-bottom: 2rem;
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
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-bottom: 2rem;
		&__item {
			width: 150px;
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
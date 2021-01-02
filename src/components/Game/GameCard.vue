<template>
	<router-link :to="{ path: `/games/${game.id}` }" class="game-card">
		<img :src="getPoster(game.background_image)" :alt="game.name" />
		<div class="game-card__content">
			<div class="content__platforms">
				<i
					v-for="platform in game.parent_platforms"
					:key="platform.id"
					:class="`${getIcon(platform.platform.slug)}`"
				></i>
			</div>
			<h3>{{ game.name }}</h3>
			<p class="content__release">Release date: {{ releaseDate || "TBA" }}</p>
		</div>
	</router-link>
</template>

<script>
import { getSmallerImg, getPlatformImg } from "@/utils/game.js";

export default {
	name: "GameCard",
	props: {
		game: {
			type: Object,
			required: true,
		},
	},
	computed: {
		releaseDate() {
			return this.game.released.split("-").reverse().join("-");
		},
	},
	methods: {
		getPoster: (path) => getSmallerImg(path),
		getIcon: (platform) => getPlatformImg(platform),
	},
};
</script>

<style lang="scss">
	.game-card {
		min-height: 20vh;
		border-radius: 0.5rem;
		overflow: hidden;
		cursor: pointer;
		& img {
			display: block;
			width: 100%;
			height: 40vh;
			object-fit: cover;
		}

		&__content {
			height: 100%;
			padding: 0.5rem 1rem;
			text-align: center;
			background: var(--bg-secondary);
			color: var(--text-primary);
			padding: 1rem;

			.content {
				&__platforms {
					& i {
						margin: 0 0.3rem;
					}
				}

				& h3 {
					padding-top: 0;
				}

				&__release {
					color: #696969;
					font-size: 0.85rem;
					font-weight: bold;
				}
			}
		}

		@media screen and (min-width: 60rem) {
			& {
				transition: box-shadow 0.4s ease-in-out;
			}
			&:hover {
				box-shadow: 0px 5px 20px #dc143c;
			}
		}
	}
</style>
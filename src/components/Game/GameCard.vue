<template>
	<router-link :to="{ path: `/games/${game.id}` }" class="game-card">
		<img :src="getPoster(game.background_image)" :alt="game.name" />
		<div class="game-card__content">
			<h3>{{ game.name }}</h3>
			<p class="game-card__content-release">
				Release date: {{ game.released || "TBA" }}
			</p>
		</div>
	</router-link>
</template>

<script>
import { getSmallerImg } from "@/utils/game.js";

export default {
	name: "GameCard",
	props: {
		game: {
			type: Object,
			required: true,
		},
	},
	methods: {
		getPoster: (path) => getSmallerImg(path),
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

			& h3 {
				padding-top: 0;
			}

			&-release {
				color: #696969;
				font-size: 0.85rem;
				font-weight: bold;
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
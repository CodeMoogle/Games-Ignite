<template>
	<router-link :to="{ path: `/games/${game.id}` }" class="game-card">
		<div class="game-card__img">
			<img :src="getPoster(game.background_image)" :alt="game.name" />
		</div>

		<div class="game-card__content">
			<div class="game-card__platforms">
				<i
					v-for="platform in game.parent_platforms"
					:key="platform.id"
					:class="`${getIcon(platform.platform.slug)}`"
				></i>
			</div>

			<h3 class="game-card__title">{{ game.name }}</h3>

			<p class="game-card__release">Release date: {{ releaseDate || "TBA" }}</p>
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
			if (this.game.released)
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
	}
	.game-card__img {
		overflow: hidden;
		& img {
			display: block;
			width: 100%;
			height: 40vh;
			object-fit: cover;
		}
	}
	.game-card__content {
		height: 100%;
		padding: 0.5rem 1rem;
		text-align: center;
		background: var(--bg-secondary);
		color: var(--text-primary);
		padding: 1rem;
	}
	.game-card__platforms {
		& i {
			margin: 0 0.3rem;
		}
	}
	.game-card__release {
		color: #696969;
		font-size: 0.85rem;
		font-weight: bold;
	}

	@media screen and (min-width: 60rem) {
		.game-card {
			transition: all 0.25s ease-in-out;
		}
		.game-card__img img {
			transition: transform 0.25s ease;
		}
		.game-card:hover {
			box-shadow: 0px 5px 20px #ff7a00;
			& .game-card__img img {
				transform: scale(1.1);
			}
		}
	}
</style>
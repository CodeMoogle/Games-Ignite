<template>
	<div class="game-card" @click="fetchGameDetails(game.id)">
		<img :src="game.background_image" :alt="game.name" />
		<div class="game-card__content">
			<h3>{{ game.name }}</h3>
			<p class="game-card__content-release">
				Release date: {{ game.released || "TBA" }}
			</p>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "GameCard",
	props: {
		game: {
			type: Object,
			required: true,
		},
	},
	methods: {
		...mapActions(["fetchGameDetails"]),
	},
};
</script>

<style lang="scss">
	.game-card {
		min-height: 20vh;
		box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
		border-radius: 1rem;
		overflow: hidden;
		cursor: pointer;
		& img {
			display: block;
			width: 100%;
			height: 40vh;
			object-fit: cover;
		}
		&__content {
			padding: 0.5rem 1rem;
			text-align: center;

			&-release {
				color: #696969;
				font-size: 0.85rem;
				font-weight: bold;
			}
		}

		@media screen and (min-width: 60rem) {
			& {
				transition: box-shadow 0.3s ease-in-out;
			}
			&:hover {
				box-shadow: 0px 5px 25px #e23759c9;
			}
		}
	}
</style>
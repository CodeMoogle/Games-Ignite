<template>
	<div class="games-preview">
		<h2 class="games-preview__title">{{ title }}</h2>

		<div class="games-preview__slider" v-if="games.length">
			<splide :options="splideOptions" :slides="games">
				<splide-slide v-for="game in games" :key="game.id">
					<GameCard :game="game" />
				</splide-slide>
			</splide>
		</div>

		<div class="inner-loader" v-else>
			<Loader />
		</div>
	</div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

import Loader from "@/components/Utils/Loader.vue";
import GameCard from "@/components/Game/GameCard.vue";

export default {
	name: "GamesPreview",
	components: {
		Splide,
		SplideSlide,
		GameCard,
		Loader,
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		games: {
			type: Array,
			required: true,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			splideOptions: {
				rewind: true,
				perPage: 4,
				gap: "1rem",
				trimSpace: true,
				breakpoints: {
					1124: {
						perPage: 3,
					},
					900: {
						perPage: 2,
					},
					600: {
						perPage: 1,
					},
				},
			},
		};
	},
};
</script>

<style lang="scss">
	.games-preview {
		padding: 0 1rem 2rem 1rem;
		min-height: 50vh;
		&__title {
			padding: 2rem 0;
		}

		& .inner-loader {
			min-height: 50vh;
		}
	}
</style>
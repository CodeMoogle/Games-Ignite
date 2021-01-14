<template>
	<div class="home">
		<div class="games-list">
			<h2 class="games-list__title">Upcoming Games</h2>
			<splide :options="splideOptions" :slides="getAllGames.upcomingGames">
				<splide-slide v-for="game in getAllGames.upcomingGames" :key="game.id">
					<GameCard :game="game" />
				</splide-slide>
			</splide>
		</div>

		<div class="games-list">
			<h2 class="games-list__title">New Games</h2>
			<splide :options="splideOptions" :slides="getAllGames.newGames">
				<splide-slide v-for="game in getAllGames.newGames" :key="game.id">
					<GameCard :game="game" />
				</splide-slide>
			</splide>
		</div>

		<div class="games-list">
			<h2 class="games-list__title">Most Popular</h2>
			<splide :options="splideOptions" :slides="getAllGames.popularGames">
				<splide-slide v-for="game in getAllGames.popularGames" :key="game.id">
					<GameCard :game="game" />
				</splide-slide>
			</splide>
		</div>
	</div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

import GameCard from "@/components/Game/GameCard.vue";

import { mapActions, mapGetters } from "vuex";

export default {
	name: "Home",
	components: {
		Splide,
		SplideSlide,
		GameCard,
	},
	data() {
		return {
			splideOptions: {
				rewind: true,
				perPage: 4,
				gap: "1rem",
				// focus: "center",
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
	computed: {
		...mapGetters(["getAllGames"]),
	},
	methods: {
		...mapActions(["fetchGames"]),
	},
	mounted() {
		this.fetchGames();
	},
};
</script>

<style lang="scss">
	.games-list {
		padding: 0 1rem 2rem 1rem;
		min-height: 50vh;
		&__title {
			padding: 2rem 0;
		}
		&__content {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			column-gap: 2rem;
			row-gap: 2rem;
		}
	}
</style>
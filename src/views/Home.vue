<template>
	<div class="home">
		<div class="games-list">
			<h2 class="games-list__title">Upcoming Games</h2>
			<div class="games-list__content">
				<GameCard
					v-for="game in getAllGames.upcomingGames"
					:key="game.id"
					:game="game"
				/>
			</div>
		</div>

		<div class="games-list">
			<h2 class="games-list__title">New Games</h2>
			<div class="games-list__content">
				<GameCard
					v-for="game in getAllGames.newGames"
					:key="game.id"
					:game="game"
				/>
			</div>
		</div>

		<div class="games-list">
			<h2 class="games-list__title">Most Popular</h2>
			<div class="games-list__content">
				<GameCard
					v-for="game in getAllGames.popularGames"
					:key="game.id"
					:game="game"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import GameCard from "@/components/Game/GameCard.vue";

import { mapActions, mapGetters } from "vuex";

export default {
	name: "Home",
	components: {
		GameCard,
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
		min-height: 80vh;
		&__title {
			padding: 2rem 0;
		}
		&__content {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
			grid-column-gap: 2rem;
			grid-row-gap: 2rem;
		}
	}
</style>
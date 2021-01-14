<template>
	<div class="home">
		<GamesPreview
			:title="'Upcoming Games'"
			:games="getAllGames.upcomingGames"
		/>

		<GamesPreview :title="'New Games'" :games="getAllGames.newGames" />

		<GamesPreview :title="'Most Popular'" :games="getAllGames.popularGames" />
	</div>
</template>

<script>
import GamesPreview from "@/components/Game/GamesPreview.vue";

import { mapActions, mapGetters } from "vuex";

export default {
	name: "Home",
	components: {
		GamesPreview,
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
</style>
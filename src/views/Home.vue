<template>
	<div class="home">
		<h1>Games-Ignite</h1>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	name: "Home",
	components: {},
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

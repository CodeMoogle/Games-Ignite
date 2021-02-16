<template>
	<div class="game-details">
		<DetailsHeader
			:backgroundImage="this.gameDetails.background_image"
			:title="this.gameDetails.name"
			:platforms="this.gameDetails.parent_platforms"
			:released="this.gameDetails.released"
			:rating="this.gameDetails.rating"
		/>

		<DetailsDescription
			:descr="this.gameDetails.description"
			:descr_raw="this.gameDetails.description_raw"
		/>

		<DetailsPlatforms :icons="gameDetails.platforms" />

		<DetailsGallery :screenshots="this.gameDetails.screenshots" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import DetailsHeader from "@/components/GameDetails/DetailsHeader.vue";
import DetailsDescription from "@/components/GameDetails/DetailsDescription";
import DetailsPlatforms from "@/components/GameDetails/DetailsPlatforms.vue";
import DetailsGallery from "@/components/GameDetails/DetailsGallery.vue";

export default {
	name: "GameDetails",
	components: {
		DetailsHeader,
		DetailsGallery,
		DetailsDescription,
		DetailsPlatforms,
	},
	computed: {
		...mapGetters(["gameDetails"]),
	},
};
</script>

<style lang="scss">
	.game-details {
		color: var(--text-primary);
		padding: 1rem 0.5rem;
		& h2 {
			font-size: 1.6rem;
			background: -webkit-linear-gradient(#ffdc99, #ff7a00);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			padding: 0;
			margin-bottom: 1rem;
		}
		& section {
			margin-bottom: 2rem;
		}
	}
</style>
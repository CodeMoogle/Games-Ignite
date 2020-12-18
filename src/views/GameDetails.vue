<template>
	<div
		class="game-details"
		:style="{
			backgroundImage: `url(${this.gameDetails.background_image})`,
		}"
	>
		<div class="game-info">
			<div class="game-info__header">
				<h2>{{ this.gameDetails.name }}</h2>
				<!-- TODO: platfroms component -->
				<div class="platforms">
					Platforms:
					<span
						v-for="platform in this.gameDetails.platforms"
						:key="platform.id"
					>
						<span>{{ platform.platform.name }}</span>
					</span>
				</div>
				<p>Rating: {{ this.gameDetails.rating }}</p>
			</div>

			<div class="game-info__description">
				<p>{{ this.gameDetails.description_raw }}</p>
			</div>

			<div class="game-info__gallery">
				<img
					v-for="screenshot in this.gameDetails.screenshots"
					:src="screenshot.image"
					alt="screenshot"
					:key="screenshot.id"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "GameDetails",
	computed: {
		...mapGetters(["gameDetails"]),
	},
};
</script>

<style lang="scss">
	.game-details {
		width: 100%;
		min-height: 100vh;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-attachment: fixed;
	}

	.game-info {
		width: 100%;
		min-height: 100vh;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.7);
		padding: 1rem;

		& img {
			width: 100%;
		}

		&__header {
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-wrap: wrap;
		}

		&__gallery {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
			grid-column-gap: 1rem;
			grid-row-gap: 1rem;
		}
	}
</style>
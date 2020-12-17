<template>
	<div class="game-card">
		<img :src="game.background_image" :alt="game.name" />
		<div class="game-card__content">
			<h3>{{ game.name }}</h3>
			<p>Release date: {{ game.released }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "GameCard",
	props: {
		game: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss">
	.game-card {
		min-height: 30vh;
		box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
		border-radius: 1rem;
		overflow: hidden;
		& img {
			display: block;
			width: 100%;
			height: 40vh;
			object-fit: cover;
		}
		&__content {
			padding: 0.5rem 1rem;
		}
	}
</style>
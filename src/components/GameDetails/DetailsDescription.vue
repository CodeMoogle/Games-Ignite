<template>
	<section class="details__description">
		<h2>About</h2>
		<div class="description__text" v-if="descr">
			<span v-if="!readMoreActivated">{{ descr_raw.slice(0, 200) }}</span>

			<span
				class="text--read-more text_themed"
				v-if="!readMoreActivated"
				@click="activateReadMore"
			>
				Read more...
			</span>

			<p v-if="readMoreActivated" v-html="descr"></p>
		</div>

		<p v-else>No description provided</p>
	</section>
</template>

<script>
export default {
	name: "DetailsDescription",
	props: {
		descr: {
			type: String,
		},
		descr_raw: {
			type: String,
		},
	},
	data() {
		return {
			readMoreActivated: false,
		};
	},
	methods: {
		activateReadMore() {
			this.readMoreActivated = true;
		},
	},
};
</script>

<style lang="scss">
	.details__description {
		white-space: pre-line;
		line-height: 1.5;
	}

	@media screen and (min-width: 60rem) {
		.details__description {
			font-size: 1.1rem;
		}
	}
</style>
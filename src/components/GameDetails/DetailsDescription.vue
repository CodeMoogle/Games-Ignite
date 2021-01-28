<template>
	<section class="details__description">
		<h2>About</h2>
		<p v-if="descr" v-html="descr"></p>

		<p v-else>No description provided</p>
	</section>
</template>

<script>
export default {
	name: "DetailsDescription",
	props: {
		descr: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss">
	.details__description {
		white-space: pre-line;
		line-height: 1.5;
	}
</style>
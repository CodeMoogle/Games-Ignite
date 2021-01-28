<template>
	<section class="details-gallery">
		<h2>Screenshots ({{ screenshotCount }})</h2>
		<div class="details-gallery__screenshots">
			<splide :options="splideOptions" :slides="screenshots">
				<splide-slide v-for="screenshot in screenshots" :key="screenshot.id">
					<img :data-splide-lazy="getImg(screenshot.image)" alt="screenshot" />
				</splide-slide>
			</splide>
		</div>
	</section>
</template>

<script>
import { getSmallerImg } from "@/utils/game.js";

import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
	name: "DetailsGallery",
	components: {
		Splide,
		SplideSlide,
	},
	props: {
		screenshots: {
			type: Array,
			required: true,
		},
	},
	computed: {
		screenshotCount() {
			return this.screenshots.length;
		},
	},
	methods: {
		getImg: (path, size) => getSmallerImg(path, size),
	},
	data() {
		return {
			splideOptions: {
				rewind: true,
				perPage: 4,
				gap: "1rem",
				trimSpace: true,
				lazyLoad: true,
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
	.details-gallery__screenshots {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		column-gap: 1rem;
		row-gap: 1rem;
		& img {
			display: block;
			width: 100%;
		}
	}
</style>
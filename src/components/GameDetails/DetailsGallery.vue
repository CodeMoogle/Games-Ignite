<template>
	<section class="details-gallery">
		<h2>Screenshots ({{ screenshotCount }})</h2>
		<div class="details-gallery__screenshots" v-if="screenshots.length">
			<splide :options="splideOptions" :slides="screenshots">
				<splide-slide v-for="screenshot in screenshots" :key="screenshot.id">
					<img
						:data-splide-lazy="getImg(screenshot.image)"
						alt="screenshot"
						@click="toggleMedia"
					/>
				</splide-slide>
			</splide>
		</div>

		<div class="details-gallery__placeholder" v-else>
			<p>No screenshots provided</p>
		</div>

		<MediaBox
			:screenshots="screenshots"
			:toggler="openMedia"
			@toggle-media="toggleMedia"
		/>
	</section>
</template>

<script>
import { getSmallerImg } from "@/utils/game.js";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import MediaBox from "@/components/Utils/MediaBox";

export default {
	name: "DetailsGallery",
	components: {
		Splide,
		SplideSlide,
		MediaBox,
	},
	props: {
		screenshots: Array,
	},
	computed: {
		screenshotCount() {
			return this.screenshots.length;
		},
	},
	methods: {
		getImg: (path, size) => getSmallerImg(path, size),
		toggleMedia() {
			this.openMedia = !this.openMedia;
		},
	},
	data() {
		return {
			openMedia: false,
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
		& img {
			display: block;
			width: 100%;
			cursor: pointer;
		}
	}

	.details-gallery__placeholder {
		font-weight: bold;
		font-size: 1.1rem;
	}
</style>
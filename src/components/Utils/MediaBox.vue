<template>
	<transition name="fade">
		<div class="media-box" v-if="isOpen && screenshots.length">
			<div class="slider-wrapper">
				<span class="screen-slider__close" @click="$emit('toggle-media')">
					<i class="fas fa-times"></i>
				</span>

				<div class="screen-slider">
					<splide :options="spliderOptions" :slides="screenshots">
						<splide-slide
							v-for="screenshot in screenshots"
							:key="screenshot.id"
						>
							<img :src="screenshot.image" alt="screenshot" />
						</splide-slide>
					</splide>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
	name: "MediaBox",
	components: {
		Splide,
		SplideSlide,
	},
	props: {
		toggler: Boolean,
		screenshots: Array,
	},
	data() {
		return {
			isOpen: false,
			spliderOptions: {
				rewind: true,
				perPage: 1,
				trimSpace: true,
			},
		};
	},
	watch: {
		toggler: function (newVal) {
			this.isOpen = newVal;
			if (this.toggler) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		},
	},
};
</script>

<style lang="scss">
	.media-box {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		min-height: 100vh;
		background-color: var(--bg-secondary);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.slider-wrapper {
		position: relative;
		width: inherit;
		height: inherit;
	}
	.screen-slider {
		& img {
			display: block;
			width: 100%;
			max-width: 1000px;
			height: auto;
			margin: 0 auto;
		}
	}
	.screen-slider__close {
		position: absolute;
		top: -50px;
		right: 50%;
		transform: translateX(50%);
		font-size: 1.5rem;
		padding: 3px 12px;
		color: #fff;
		border: 2px solid #fff;
		opacity: 0.6;
		z-index: 9999;
		border-radius: 50%;
		cursor: pointer;
	}
</style>
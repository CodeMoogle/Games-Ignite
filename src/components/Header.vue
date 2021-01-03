<template>
	<div class="header">
		<router-link class="header__logo" to="/">
			<img :src="require('@/assets/logo.svg')" alt="logo" />
			<span class="text_themed">Ignite</span>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "Header",
};
</script>

<style lang="scss">
	.header {
		position: fixed;
		top: 0;
		width: 100%;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--bg-secondary);
		color: var(--text-primary);
		padding: 0.5rem;
		z-index: 9999;
		font-size: 1.5rem;

		&__logo {
			transition: all 0.2s ease;
			vertical-align: middle;
			& span {
				text-transform: uppercase;
				font-weight: bold;
			}
			&:hover {
				filter: brightness(1.2);
			}
		}
	}
</style>
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/games/:id',
		component: () => import('@/views/GameDetails.vue'),
		beforeEnter: (to, from, next) => {
			store.dispatch('fetchGameDetails', to.params.id, { root: true }).then(() => {
				next()
			})
		},
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router

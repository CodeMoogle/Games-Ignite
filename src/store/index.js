import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { games_url } from './api'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		newGames: [],
		popularGames: [],
		upcomingGames: [],
		searchedGames: [],
	},
	mutations: {
		fetchGames(state, payload) {
			state.newGames = [...state.newGames, ...payload.newGames]
			state.popularGames = [...state.popularGames, ...payload.popularGames]
			state.upcomingGames = [...state.upcomingGames, ...payload.upcomingGames]
		},
	},
	actions: {
		async fetchGames({ commit }) {
			const newGames = await axios.get(games_url.new()).then(res => res.data.results)
			const popularGames = await axios.get(games_url.popular()).then(res => res.data.results)
			const upcomingGames = await axios.get(games_url.upcoming()).then(res => res.data.results)

			commit('fetchGames', { newGames, popularGames, upcomingGames })
		},
	},
	getters: {
		getAllGames: state => state,
	},
})

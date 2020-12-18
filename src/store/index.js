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
		gameDetails: null,
	},
	mutations: {
		fetchGames(state, payload) {
			state.newGames = payload.newGames
			state.popularGames = payload.popularGames
			state.upcomingGames = payload.upcomingGames
		},
		fetchGameDetails(state, payload) {
			state.gameDetails = payload
		},
	},
	actions: {
		async fetchGames({ commit }) {
			const newGames = await axios.get(games_url.new()).then(res => res.data.results)
			const popularGames = await axios.get(games_url.popular()).then(res => res.data.results)
			const upcomingGames = await axios.get(games_url.upcoming()).then(res => res.data.results)

			commit('fetchGames', { newGames, popularGames, upcomingGames })
		},
		async fetchGameDetails({ commit }, id) {
			const details = await axios.get(games_url.gameDetails(id)).then(res => res.data)
			const screenshots = await axios.get(games_url.gameScreenshots(id)).then(res => res.data.results)

			commit('fetchGameDetails', { ...details, screenshots })
		},
	},
	getters: {
		getAllGames: state => state,
		gameDetails: state => state.gameDetails,
	},
})

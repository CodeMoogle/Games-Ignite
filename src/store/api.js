import { getCurrentDate, getYear } from '@/utils/dates'

// urls
const BASE_URL = 'https://api.rawg.io/api/'
const POPULAR_GAMES_URL = `games?dates=${getCurrentDate()}&ordering=-rating&page_size=10`
const NEW_GAMES_URL = `games?dates=${getYear('-')},${getCurrentDate()}&ordering=-released&page_size=10`
const UPCOMING_GAMES_URL = `games?dates=${getCurrentDate()},${getYear('+')}&ordering=-added&page_size=10`

export const games_url = {
	popular: () => `${BASE_URL}${POPULAR_GAMES_URL}`,
	new: () => `${BASE_URL}${NEW_GAMES_URL}`,
	upcoming: () => `${BASE_URL}${UPCOMING_GAMES_URL}`,
	gameDetails: game_id => `${BASE_URL}games/${game_id}`,
	gameScreenshots: game_id => `${BASE_URL}games/${game_id}/screenshots`,
}

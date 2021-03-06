export const getSmallerImg = (imgPath, size = 640) => {
	const image = imgPath.match(/media\/screenshots/)
		? imgPath.replace('media/screenshots', `media/resize/${size}/-/screenshots/`)
		: imgPath.replace('/media/games/', `/media/resize/${size}/-/games/`)

	return image
}

// return class for FA icons
export const getPlatformImg = platform => {
	if (
		platform === 'playstation' ||
		platform === 'ps-vita' ||
		platform === 'playstation3' ||
		platform === 'playstation4' ||
		platform === 'playstation5'
	) {
		return 'fab fa-playstation'
	} else if (platform === 'xbox' || platform === 'xbox360' || platform === 'xbox-one' || platform === 'xbox-series-x') {
		return 'fab fa-xbox'
	} else if (platform === 'pc') {
		return 'fab fa-windows'
	} else if (platform === 'linux') {
		return 'fab fa-linux'
	} else if (platform === 'ios' || platform === 'mac' || platform === 'macos') {
		return 'fab fa-apple'
	} else {
		return 'fas fa-gamepad'
	}
}

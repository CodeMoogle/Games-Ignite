export const getSmallerImg = (imgPath, size = 640) => {
	const image = imgPath.match(/media\/screenshots/)
		? imgPath.replace('media/screenshots', `media/resize/${size}/-/screenshots/`)
		: imgPath.replace('/media/games/', `/media/resize/${size}/-/games/`)

	return image
}

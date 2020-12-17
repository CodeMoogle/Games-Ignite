export const getCurrentDate = () => {
	return new Date().toISOString().slice(0, 10)
}

export const getYear = (operation, yearsCount = 1) => {
	if (!operation) throw new Error(`"operation(first argument) must be a string with value "-" or "+".`)

	const nextYear = new Date()
	if (operation === '-') nextYear.setFullYear(nextYear.getFullYear() - yearsCount)
	if (operation === '+') nextYear.setFullYear(nextYear.getFullYear() + yearsCount)

	return nextYear.toISOString().slice(0, 10)
}

export function throttle (fn, delay = 10) {
	let result,
		last = 0,
		count = 0
	return function (...arg) {
		const time = Date.now()
		count++
		if (time - last > delay) {
			last = time
			arg.push(count)
			result = fn.apply(this, arg)
			count = 0
			return result
		}
	}
}

export function debounce (fn, delay = 10) {
	let result,
		last = 0
	return function (...arg) {
		const time = Date.now()
		if (time - last > delay) {
			result = fn.apply(this, arg)
		}
		last = time
		return result
	}
}

export function formatNumber (num, len = 1) {
	return ('0'.repeat(len) + num).slice(-len)
}
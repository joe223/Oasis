import Popup from '@oasis-ui/popup'

const props = {
	action: {
		type: String,
		default: 'click'
	}
}

export default {
	props,
	name: 'Dropdown',
	render (h) {
		const $slots = this.$slots.default

		if (!$slots || !$slots[0]) return

		const $trigger = $slots[0]

		console.log(this.$slots.default)
		return $trigger
	}
}

import { computed, Ref } from 'vue'

export function useBadgeColor(color: Ref<string>) {
	return computed(() => {
		switch (color.value) {
			case 'red':
				return {
					'bg-red-500': true,
					'text-white': true,
				}
			case 'blue':
				return {
					'bg-blue-600': true,
					'text-white': true,
				}
			case 'yellow':
				return {
					'bg-yellow-400': true,
					'text-white': true,
				}
			case 'green':
				return {
					'bg-green-300': true,
					'text-white': true,
				}
			case 'guide':
				return {
					'bg-gray-900': true,
					'text-white': true,
				}
			default:
				return {
					'bg-blue-600': true,
					'text-black': true,
				}
		}
	})
}

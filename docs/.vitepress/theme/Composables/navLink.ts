import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'

export function useNavLink(item: any) {
	const route = useRoute()
	const isExternal = isExternalCheck(item.value.link)
	const props = computed(() => {
		const routePath = normalizePath(`/${route.data.relativePath}`)
		let active = false
		if (item.value.activeMatch) {
			active = new RegExp(item.value.activeMatch).test(routePath)
		} else {
			const itemPath = normalizePath(item.value.link)
			active =
				itemPath === '/'
					? itemPath === routePath
					: routePath.startsWith(itemPath)
		}
		return {
			class: {
				active,
				isExternal,
			},
			href: isExternal ? item.value.link : withBase(item.value.link),
			target: item.value.target || (isExternal ? '_blank' : null),
			rel: item.value.rel || (isExternal ? 'noopener noreferrer' : null),
			'aria-label': item.value.ariaLabel,
		}
	})
	return {
		props,
		isExternal,
	}
}

function normalizePath(path: string) {
	return path
		.replace(/#.*$/, '')
		.replace(/\?.*$/, '')
		.replace(/\.(html|md)$/, '')
		.replace(/\/index$/, '/')
}

export const outboundRE = /^[a-z]+:/i

export function isExternalCheck(path: string) {
	return outboundRE.test(path)
}

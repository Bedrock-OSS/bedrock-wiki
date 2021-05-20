import { useMediaQuery } from './mediaQuery'

export function useIsMobile() {
	return { isMobile: useMediaQuery('(max-width: 768px)') }
}

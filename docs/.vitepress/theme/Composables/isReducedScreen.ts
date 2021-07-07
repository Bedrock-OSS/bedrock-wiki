import { useMediaQuery } from './mediaQuery'

export function useIsReducedScreen() {
	return { isReducedScreen: useMediaQuery('(max-width: 1280px)') }
}

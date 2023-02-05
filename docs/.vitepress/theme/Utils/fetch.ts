export function universalFetch(url: string, headers: any) {
	if (import.meta.env.SSR) {
		return import('node-fetch').then((nodeFetch) =>
			(<any>nodeFetch)(url, headers)
		)
	}

	return fetch(url, headers)
}

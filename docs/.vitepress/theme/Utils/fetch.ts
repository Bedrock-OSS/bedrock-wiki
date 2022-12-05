export async function universalFetch(url: string, headers: any) {
	if (import.meta.env.SSR) {
		return await import('node-fetch').then((fetch) => {
			return fetch.default(url, headers)
		})
	}

	return fetch(url, headers)
}

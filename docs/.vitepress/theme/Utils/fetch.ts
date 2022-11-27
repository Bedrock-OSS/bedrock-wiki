import fetch from 'node-fetch'

export async function universalFetch(url: string, headers: any) {
	if (import.meta.env.SSR) {
		return await fetch(url, headers)
	}

	return fetch(url, headers)
}

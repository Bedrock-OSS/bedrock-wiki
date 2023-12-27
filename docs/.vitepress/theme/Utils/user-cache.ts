import { universalFetch } from './fetch'

// partial type of https://api.github.com/users/user
export interface GitHubAuthor {
	login: string
	avatar_url: string
	html_url: string
}

const CACHE: Map<string, GitHubAuthor | null> = new Map()

export async function getGitHubAuthor(login: string): Promise<GitHubAuthor | null> {
	const author = CACHE.get(login)
	if (author !== void 0) {
		return author
	}

	const headers = {
		...(!!import.meta.env.GITHUB_TOKEN && {
			Authorization: 'Bearer ' + import.meta.env.GITHUB_TOKEN,
		}),
	}

	const res = await universalFetch(`https://api.github.com/users/${login}`, { headers })
	if (res.ok) {
		const author = await res.json()
		CACHE.set(login, author)
		return author
	} else {
		CACHE.set(login, null)
		return null
	}
}
// partial type of https://api.github.com/users/user
export interface GitHubAuthor {
  login: string;
  avatar_url: string;
  html_url: string;
}

const cache: Map<string, GitHubAuthor | null> = new Map();

export async function getGitHubAuthor(login: string): Promise<GitHubAuthor | null> {
  const author = cache.get(login);
  if (author !== undefined) return author;

  const headers = {
    ...(!!import.meta.env.GITHUB_TOKEN && {
      Authorization: "Bearer " + import.meta.env.GITHUB_TOKEN,
    }),
  };

  const res = await fetch(`https://api.github.com/users/${login}`, { headers });
  if (res.ok) {
    const author = await res.json();
    cache.set(login, author);
    return author;
  } else {
    cache.set(login, null);
    return null;
  }
}

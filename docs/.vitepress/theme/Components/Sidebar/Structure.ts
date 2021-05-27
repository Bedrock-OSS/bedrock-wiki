export interface INavCategory {
	text: string
	children: INavLink[]
}
export interface INavLink {
	text: string
	link: string
	badge?: Badge
	tags?: Array<string>
}

export type Badge = {
	text: string
	color: string
}

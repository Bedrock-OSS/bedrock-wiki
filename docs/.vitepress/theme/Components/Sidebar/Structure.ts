export interface INavCategory {
	text: string
	children: INavLink[]
}
export interface INavLink {
	text: string
	link: string
	tags?: Array<string>
}

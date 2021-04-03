export interface INavCategory {
	text: string
	children: INavLink[]
}
export interface INavLink {
	text: string
	link: string
	badge?: Badge
}

export type Badge = {
  text: string;
  color: string;
};
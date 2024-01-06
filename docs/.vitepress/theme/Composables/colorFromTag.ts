export function colorFromTag(tag: string) {
	let color = ''

	switch (tag) {
	case 'guide':
	case 'info':
		color = 'green'
		break
	case 'help':
	case 'easy':
	case 'beginner':
	case 'recipe':
	case 'system':
		color = 'blue'
		break
	case 'experimental':
	case 'intermediate':
	case 'method':
		color = 'orange'
		break
	case 'beta':
	case 'expert':
	case 'outdated':
	case 'red':
		color = 'red'
		break
	case 'scripting':
		color = 'yellow'
		break
	default:
	}

	return color
}

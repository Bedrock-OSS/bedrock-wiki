export function colorFromTag(tag) {
	if (tag == 'experimental') {
		return 'orange'
	} else if (tag == 'beta') {
		return 'red'
	} else if (tag == 'guide') {
		return 'green'
	} else if (tag == 'help') {
		return 'blue'
	} else {
		return ''
	}
}

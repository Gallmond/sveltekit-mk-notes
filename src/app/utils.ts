import type { User } from 'firebase/auth'
import type { UserNote } from './Firebase'
import type { Func } from './types'

const zeroPad = (n: number): string => {
	return n < 10 ? `0${n}` : `${n}`
}

/**
 * @returns {string} yyyy-mm-dd
 */
export const dateString = (d: Date = new Date()) => {
	const year = d.getFullYear()

	const month = zeroPad(d.getMonth() + 1)

	const day = zeroPad(d.getDate())

	return `${year}-${month}-${day}`
}

/**
 * @returns {string} hh:mm
 */
export const timeString = (d: Date = new Date()) => {
	const hours = zeroPad(d.getHours())
	const minutes = zeroPad(d.getMinutes())

	return `${hours}:${minutes}`
}

export const dateTimeString = (d: Date = new Date()) => {
	return `${dateString(d)} ${timeString(d)}`
}

const timeouts: Record<string, NodeJS.Timeout> = {}
export const debounce = (label: string, func: Func, milliseconds: number) => {
	if (timeouts[label]) {
		clearTimeout(timeouts[label])
	}

	timeouts[label] = setTimeout(func, milliseconds)
}

export const getNoteTitle = (parser: DOMParser, note: UserNote, generatedHtml: string): string => {
	const maxLen = 255

	const doc = parser.parseFromString(generatedHtml, 'text/html')

	// get first h1 tag
	const h1 = doc.querySelectorAll('h1')
	if (h1.length > 0) {
		return h1[0].innerText
	}

	// get first text content of any node
	const nodes = doc.childNodes
	if (nodes.length > 0 && nodes[0].textContent) {
		return nodes[0].textContent.substring(0, maxLen)
	}

	return note.title
}

/**
 *
 * @param {number} test Enum to test
 * @param {number[]} masks All masks that the enum should contain
 * @returns {boolean}
 */
export const hasMasks = (test: number, ...masks: number[]): boolean => {
	let valid = 0
	for (const mask of masks) {
		if (test & mask) valid++
	}

	return valid === masks.length
}

export const getUserDisplayName = (user: User | null): string => {
	if (user === null) {
		return ''
	}

	return user.displayName === null ? user.email ?? '' : `${user.displayName} <${user.email}>`
}

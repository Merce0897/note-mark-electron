import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'UTC'
})

export const formatDateFromMs = (ms: number): string => dateFormatter.format(ms)

export const cn = (...args: ClassValue[]): string => {
  return twMerge(clsx(args))
}

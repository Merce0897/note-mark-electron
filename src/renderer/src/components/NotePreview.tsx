import { ComponentProps } from 'react'
import { NoteInfo } from '@shared/models'
import { cn, formatDateFromMs } from '@renderer/utils'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  className,
  isActive = false,
  ...props
}: NotePreviewProps): JSX.Element => {
  const date = formatDateFromMs(lastEditTime)

  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 mt-1 rounded-md transition-colors duration-75',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-500/75': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{date}</span>
      <p>{content}</p>
    </div>
  )
}

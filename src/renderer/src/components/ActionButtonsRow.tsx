import { NewNoteButton, DeleteButton } from './Button'
import { ComponentProps } from 'react'

export const ActionButtonsRow = ({ ...props }: ComponentProps<'div'>): JSX.Element => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteButton />
    </div>
  )
}

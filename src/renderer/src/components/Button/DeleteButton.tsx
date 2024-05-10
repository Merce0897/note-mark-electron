import { useSetAtom } from 'jotai'
import { ActionButtonProps, ActionButton } from './ActionButton'
import { FaRegTrashCan } from 'react-icons/fa6'
import { deleteNoteAtom } from '@renderer/store'

export const DeleteButton = ({ ...props }: ActionButtonProps): JSX.Element => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDelete = async (): Promise<void> => {
    await deleteNote()
  }

  return (
    <ActionButton onClick={handleDelete} {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}

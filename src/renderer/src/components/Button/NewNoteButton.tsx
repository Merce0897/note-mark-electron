import { useSetAtom } from 'jotai'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { LuFileSignature } from 'react-icons/lu'
import { createEmptyNoteAtom } from '@renderer/store'

export const NewNoteButton = ({ ...props }: ActionButtonProps): JSX.Element => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async (): Promise<void> => {
    await createEmptyNote()
  }

  return (
    <ActionButton onClick={handleCreation} {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}

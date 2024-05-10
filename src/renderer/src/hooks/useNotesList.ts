import { notesAtom, selectedNoteIndexAtom } from '@/store'
import { useAtom, useAtomValue } from 'jotai'
import { NoteInfo } from '@shared/models'

export const useNotesList = ({
  onSelect
}: {
  onSelect?: () => void
}): {
  notes: NoteInfo[] | undefined
  selectedNoteIndex: number | null
  handleNoteSelect: (index: number) => () => Promise<void>
} => {
  const notes = useAtomValue(notesAtom)

  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom)

  const handleNoteSelect = (index: number) => async (): Promise<void> => {
    setSelectedNoteIndex(index)

    if (onSelect) {
      onSelect()
    }
  }

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  }
}

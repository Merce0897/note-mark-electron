import { MDXEditorMethods } from '@mdxeditor/editor'
import { saveNoteAtom, selectedNoteAtom } from '@renderer/store'
import { useAtomValue, useSetAtom } from 'jotai'
import { useRef, RefObject } from 'react'
import { SaveNote } from '@shared/types'
import { throttle } from 'lodash'
import { autoSavingTime } from '@shared/constants'

export const useMarkdownEditor = (): {
  editorRef: RefObject<MDXEditorMethods>
  selectedNote: {
    content: string
    title: string
    lastEditTime: number
  } | null
  handleAutoSaving: SaveNote
  handleBlur: () => Promise<void>
} => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const saveNote = useSetAtom(saveNoteAtom)
  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSaving: SaveNote = throttle(
    async (content) => {
      if (!selectedNote) return
      await saveNote(content)
    },
    autoSavingTime,
    {
      leading: false,
      trailing: true
    }
  )

  const handleBlur = async (): Promise<void> => {
    if (!selectedNote) return

    handleAutoSaving.cancel()

    const content = editorRef.current?.getMarkdown()

    if (content != null) {
      await saveNote(content)
    }
  }

  return {
    editorRef,
    selectedNote,
    handleAutoSaving,
    handleBlur
  }
}

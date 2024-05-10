import { Content, FloatingNoteTitle, MarkDownEditor, RootLayout, Sidebar } from './components'
import { ActionButtonsRow } from './components/ActionButtonsRow'
import DraggableTopbar from './components/DraggableTopbar'
import { NotePreviewList } from './components/NotePreviewList'
import { useRef } from 'react'

function App(): JSX.Element {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = (): void => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      <DraggableTopbar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20" ref={contentContainerRef}>
          <FloatingNoteTitle className="pt-2" />
          <MarkDownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App

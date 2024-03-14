import { useState } from 'react'
import {
  GptMessage,
  MyMessage,
  TextMessageBoxSelect,
  TypingLoader
} from '../../components'
import { type ToDoType } from '../../../interfaces'

interface Message {
  text: string
  isGpt: boolean
}

export const OrthographyPage = (): ToDoType => {
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

  const handlePost = (message: string): ToDoType => {
    setIsLoading(true)
    setMessages((prev) => [...prev, { text: message, isGpt: false }])

    // ToDoType: UseCase

    setIsLoading(false)

    // ToDoType: add message isGpt = true
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2 fade-in">
          <GptMessage text="Hola, ¿en qué puedo ayudarte hoy?" />
          {messages.map((message: Message, index: number) =>
            message.isGpt
              ? (
              <GptMessage key={index} text={message.text} />
                )
              : (
              <MyMessage key={index} text={message.text} />
                )
          )}
          {isLoading && (
            <div className="col-start-1 col-end-12">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>
      <TextMessageBoxSelect
        onSendMessage={handlePost}
        placeholder="Escribe un mensaje..."
        options={[
          { id: '1', text: 'Opción 1' },
          { id: '2', text: 'Opción 2' },
          { id: '3', text: 'Opción 3' }
        ]}
      />
    </div>
  )
}

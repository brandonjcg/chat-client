import { type FormEvent, useState } from 'react'
import { type ToDoType } from '../../../interfaces'

interface Props {
  onSendMessage: (message: string) => void
  placeholder?: string
  disableCorrections?: boolean
}

export const TextMessageBox = ({
  onSendMessage,
  placeholder,
  disableCorrections = false
}: Props): ToDoType => {
  const [message, setMessage] = useState('')

  const hanldeSendMessage = (event: FormEvent<HTMLFormElement>): ToDoType => {
    event.preventDefault()

    if (message.trim().length === 0) return

    onSendMessage(message)
    setMessage('')
  }

  return (
    <form
      onSubmit={hanldeSendMessage}
      className="flex felx-row items-center h-16 rounded-xl bg-white w-full px-4"
    >
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            autoFocus
            name="message"
            className="flex w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            placeholder={placeholder}
            autoComplete={disableCorrections ? 'on' : 'off'}
            autoCorrect={disableCorrections ? 'on' : 'off'}
            spellCheck={disableCorrections ? 'true' : 'false'}
            value={message}
            onChange={(event) => { setMessage(event.target.value) }}
          />
        </div>
      </div>
      <div className="ml-4">
        <button className="btn-primary">
          <span className="mr-2">Enviar</span>
          <i className="fa-regular fa-paper-plane" />
        </button>
      </div>
    </form>
  )
}

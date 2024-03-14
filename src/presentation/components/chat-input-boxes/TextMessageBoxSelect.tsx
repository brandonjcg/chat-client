import { type FormEvent, useState } from 'react'
import { type ToDoType } from '../../../interfaces'

interface Option {
  id: string
  text: string
}

interface Props {
  onSendMessage: (message: string, selectedOption: string) => void
  placeholder?: string
  disableCorrections?: boolean
  options: Option[]
}

export const TextMessageBoxSelect = ({
  onSendMessage,
  placeholder,
  disableCorrections = false,
  options
}: Props): ToDoType => {
  const [message, setMessage] = useState('')
  const [selectedOption, setSelectedOption] = useState<string>('')

  const hanldeSendMessage = (event: FormEvent<HTMLFormElement>): ToDoType => {
    event.preventDefault()

    if (message.trim().length === 0) return

    onSendMessage(message, selectedOption)
    setMessage('')
  }

  return (
    <form
      onSubmit={hanldeSendMessage}
      className="flex felx-row items-center h-16 rounded-xl bg-white w-full px-4"
    >
      <div className="flex-grow">
        <div className="flex">
          <input
            type="text"
            autoFocus
            name="message"
            className="w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            placeholder={placeholder}
            autoComplete={disableCorrections ? 'on' : 'off'}
            autoCorrect={disableCorrections ? 'on' : 'off'}
            spellCheck={disableCorrections ? 'true' : 'false'}
            value={message}
            onChange={(event) => { setMessage(event.target.value) }}
          />
          <select
            name="select"
            className="w-2/5 ml-5 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            value={selectedOption}
            onChange={(event) => { setSelectedOption(event.target.value) }}
          >
            <option value="">Selecciona una opción</option>
            {options.map(({ id, text }) => (
              <option key={id} value={id}>
                {text}
              </option>
            ))}
          </select>
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

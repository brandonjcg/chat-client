import { type ToDoType } from '../../../interfaces'
import './TypingLoader.css'

export const TypingLoader = (): ToDoType => {
  return (
    <div className="typing">
        <div className="circle scaling"></div>
        <div className="circle scaling"></div>
        <div className="circle scaling"></div>
    </div>
  )
}

import { RouterProvider } from 'react-router-dom'
import { router } from './presentation/router/router'
import { type ToDoType } from './interfaces'

export const App = (): ToDoType => {
  return <RouterProvider router={router} />
}

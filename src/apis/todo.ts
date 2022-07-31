import { JsonplaceholderType, simulateApiCall } from './utils'
import { TODO_DATA } from './data'
import { Todo, TodoEnum } from 'reducers/todo'

export const fetchMockTodos = () => {
  return simulateApiCall(TODO_DATA)
}

export const fetchTodos = async () => {
  const todosResponse = (await (
    await fetch('https://jsonplaceholder.typicode.com/todos')
  ).json()) as JsonplaceholderType[]

  if (!Array.isArray(todosResponse)) {
    throw new Error('Invalid response!')
  }

  return todosResponse.map(todo => ({
    id: todo.id.toString(),
    content: todo.title,
    state: todo.completed ? TodoEnum.COMPLETED : TodoEnum.TODO,
  })) as Todo[]
}

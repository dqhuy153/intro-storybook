import { ITodoState, TodoEnum } from '.'

export const getTodosList = (todoState: ITodoState) =>
  todoState.todos.filter(todo => todo.state === TodoEnum.TODO)

export const getInprogressList = (todoState: ITodoState) =>
  todoState.todos.filter(todo => todo.state === TodoEnum.INPROGRESS)

export const getCompletedList = (todoState: ITodoState) =>
  todoState.todos.filter(todo => todo.state === TodoEnum.COMPLETED)

export const getLoadingTodoList = (todoState: ITodoState) => todoState.loading

export const getTodoError = (todoState: ITodoState) => todoState.error

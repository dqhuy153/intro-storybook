import { createSlice } from '@reduxjs/toolkit'

export enum TodoEnum {
  TODO = 'todo',
  INPROGRESS = 'inprogress',
  COMPLETED = 'completed',
}

export interface Todo {
  id: string
  content: string
  state: TodoEnum
}

export interface ITodoState {
  error: string | null
  loading: boolean
  todos: Todo[]
}

const INITIAL_STATE = {
  error: null,
  loading: false,
  todos: [],
}

const todoSlice = createSlice({
  name: 'todoState',
  initialState: INITIAL_STATE,
  reducers: {
    doAddTodo(state: ITodoState, action: { payload: Todo }) {
      state.todos.push(action.payload)
    },
    setInprogressTodo(state: ITodoState, action: { payload: { id: string } }) {
      const todo = state.todos.find(x => x.id === action.payload.id)
      if (todo) todo.state = TodoEnum.INPROGRESS
    },
    setNotStartedTodo(state: ITodoState, action: { payload: { id: string } }) {
      const todo = state.todos.find(x => x.id === action.payload.id)
      if (todo) todo.state = TodoEnum.TODO
    },
    setCompletedTodo(state: ITodoState, action: any) {
      const todo = state.todos.find(x => x.id === action.payload.id)
      if (todo) todo.state = TodoEnum.COMPLETED
    },
    doDeleteTodo(state: ITodoState, action: { payload: { id: string } }) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    doFetchTodo(state: ITodoState, _action: any) {
      state.loading = true
    },
    doSetTodos(state: ITodoState, action: { payload: Todo[] }) {
      state.todos = action.payload
    },
    doFetchMockTodo(state: ITodoState, _action: any) {
      state.loading = true
    },
    doFetchTodoSuccess(state: ITodoState, action: { payload: Todo[] }) {
      state.todos = action.payload
      state.loading = false
    },
    doFetchTodoError(state: ITodoState, action: { payload: string }) {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const {
  doAddTodo,
  setInprogressTodo,
  setNotStartedTodo,
  setCompletedTodo,
  doDeleteTodo,
  doFetchTodo,
  doFetchMockTodo,
  doSetTodos,
  doFetchTodoSuccess,
  doFetchTodoError,
} = todoSlice.actions

export default todoSlice.reducer

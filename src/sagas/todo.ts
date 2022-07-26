import { fetchTodos } from '../apis'
import {
  doFetchTodo,
  doFetchTodoError,
  doFetchTodoSuccess,
  Todo,
} from '../reducers/todo'
import { call, takeEvery, put } from 'redux-saga/effects'

export function* handleFetchTodos() {
  try {
    const response: Todo[] = yield call(fetchTodos)
    yield put(doFetchTodoSuccess(response))
  } catch (error) {
    yield put(doFetchTodoError('Fetch data failed!'))
  }
}

export function* watchTodos() {
  yield takeEvery(doFetchTodo.type, handleFetchTodos)
}

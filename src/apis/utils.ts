import { Todo } from '../reducers/todo'

const WAITING_TIME = 2000

export interface JsonplaceholderType {
  completed: boolean
  id: number
  title: string
  userId: number
}

export const simulateApiCall = (responseData: Todo[]) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject('Permission Denied');
      resolve(responseData)
    }, WAITING_TIME)
  })

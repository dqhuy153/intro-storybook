import { Todo, TodoEnum } from '../reducers/todo'

export const TODO_DATA: Todo[] = [
  { id: '1', content: 'Introduce Storybook', state: TodoEnum.INPROGRESS },
  { id: '2', content: 'Get started', state: TodoEnum.TODO },
  { id: '3', content: 'Design System', state: TodoEnum.TODO },
  { id: '4', content: 'Practice', state: TodoEnum.TODO },
]

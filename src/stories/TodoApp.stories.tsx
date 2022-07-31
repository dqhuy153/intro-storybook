import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TodoScreen from 'components/pages/TodoScreen'
import { Todo, TodoEnum } from 'reducers/todo'

export default {
  title: 'Screen/Todo',
  component: TodoScreen,
  argTypes: {},
  loaders: [
    async () => {
      const todosResponse = await (
        await fetch('https://jsonplaceholder.typicode.com/todos')
      ).json()

      if (!Array.isArray(todosResponse)) {
        throw new Error('Invalid response!')
      }

      return {
        storybookData: todosResponse.map(todo => ({
          id: todo.id.toString(),
          content: todo.title,
          state: todo.completed ? TodoEnum.COMPLETED : TodoEnum.TODO,
        })) as Todo[],
      }
    },
  ],
} as ComponentMeta<typeof TodoScreen>

const Template: ComponentStory<typeof TodoScreen> = (
  args,
  { loaded: storybookData }
) => <TodoScreen {...args} {...storybookData} />

export const FirstStory = Template.bind({})
FirstStory.args = {}

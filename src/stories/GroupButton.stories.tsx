import { ComponentStory, ComponentMeta } from '@storybook/react'
import GroupButton, { GroupButtonProps } from 'components/atoms/GroupButton'
import * as ButtonStories from './Button.stories'

export default {
  title: 'Component/GroupButton',
  component: GroupButton,
  argTypes: {},
} as ComponentMeta<typeof GroupButton>

const Template: ComponentStory<typeof GroupButton> = args => (
  <GroupButton {...args} />
)

export const FirstStory = Template.bind({})
FirstStory.args = {
  buttonProps: [
    { ...ButtonStories.Primary.args },
    { ...ButtonStories.Secondary.args },
  ],
} as GroupButtonProps

export const SecondStory = Template.bind({})
SecondStory.args = {
  ...FirstStory.args,
  orientation: 'vertical',
} as GroupButtonProps

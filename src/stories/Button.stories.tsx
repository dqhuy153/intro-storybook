import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button, { ButtonProps } from 'components/atoms/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    label: {
      defaultValue: 'Button',
    },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary',
} as ButtonProps

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
} as ButtonProps

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
} as ButtonProps

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
} as ButtonProps

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
} as ButtonProps

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
  loadingText: 'Loading',
} as ButtonProps

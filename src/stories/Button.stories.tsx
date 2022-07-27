import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button, { ButtonProps } from 'components/atoms/Button'

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    label: {
      defaultValue: 'Button',
    },
  },
  parameters: {
    backgrounds: {
      values: [{ name: 'red', value: '#f00' }],
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
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

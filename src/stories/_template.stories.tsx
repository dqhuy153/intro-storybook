import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TempCmp, { TemplateProps } from 'components/atoms/_template'

export default {
  title: 'Component/Template',
  component: TempCmp,
  argTypes: {},
} as ComponentMeta<typeof TempCmp>

const Template: ComponentStory<typeof TempCmp> = args => <TempCmp {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {} as TemplateProps

export const SecondStory = Template.bind({})
SecondStory.args = {} as TemplateProps

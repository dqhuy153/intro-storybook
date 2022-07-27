import { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TempCmp, { TemplateProps } from 'components/atoms/_template'

// Define stories according to the Component Story Format (CSF)
// The default export metadata controls how Storybook lists your stories and provides information used by addons.
export default {
  title: 'Component/Example', //rename stories here
  component: TempCmp,
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof TempCmp>

//simple export
export const Basic = () => <TempCmp>Template</TempCmp>

//complex export: can using react hooks,..
export const Complex = () => {
  const [count, setCount] = useState<number>(0)

  const handleClick = () => {
    setCount(prev => prev + 1)
  }

  return <TempCmp onClick={handleClick}>Click to increase: {count}</TempCmp>
}

// We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TempCmp> = args => <TempCmp {...args} />

// Each story then reuses that template
export const FirstStory = Template.bind({})
FirstStory.args = {
  children: 'First story',
} as TemplateProps

// Template.bind({}) is a standard JavaScript technique for making a copy of a function.
// We copy the Template so each exported story can set its own properties on it.
export const SecondStory = Template.bind({})
SecondStory.args = {
  ...FirstStory.args,
  children: 'Second story',
} as TemplateProps

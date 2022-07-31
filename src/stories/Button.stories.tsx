import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'
import Button, { ButtonProps } from 'components/atoms/Button'
import { CustomDocumentationComponent } from 'components/documents/Button'
import { Provider } from 'react-redux'
import store from '../store'

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: {
      control: 'color',
      //hide on table controls
      // table: {
      //   disable: true,
      // },
    },
    label: {
      defaultValue: 'Button',
      type: 'string',
      //control types: https://storybook.js.org/docs/react/essentials/controls#configuration
      control: 'text',
      options: ['Normal', 'Bold', 'Italic'],
      mapping: {
        Bold: <b>Bold</b>,
        Italic: <i>Italic</i>,
      },
    },
    variant: {
      type: 'string',
      control: 'radio',
      options: [
        'primary',
        'secondary',
        'outline',
        'success',
        'warning',
        'danger',
      ],
    },
    advanced: { control: 'boolean' },
    // below are only included when advanced is true
    //condition docs: https://storybook.js.org/docs/react/essentials/controls#conditional-controls
    margin: { control: 'number', if: { arg: 'advanced' } },
    padding: { control: 'number', if: { arg: 'advanced' } },
    cornerRadius: { control: 'number', if: { arg: 'advanced' } },
  },
  parameters: {
    backgrounds: {
      values: [{ name: 'red', value: '#f00' }],
    },
    docs: {
      page: () => (
        <Provider store={store}>
          <ChakraProvider>
            <CustomDocumentationComponent />
          </ChakraProvider>
        </Provider>
      ),
    },
  },
  decorators: [story => <Provider store={store}>{story()}</Provider>],
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

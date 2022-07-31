import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from '../src/store/index.ts'

// All stories expect a theme arg
// export const argTypes = { theme: { control: 'select', options: ['light', 'dark'] } };

// The default value of the theme arg to all stories
// export const args = { theme: 'light' };

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    //expanded: true, //show full documentation of each property
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Example',
        'Component',
        ['Example', 'Template', 'Button', 'GroupButton'],
        'Form',
        'Screen',
      ],
    },
  },
}

export const decorators = [
  story => (
    <Provider store={store}>
      <ChakraProvider>{story()}</ChakraProvider>
    </Provider>
  ),
]

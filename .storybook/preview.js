import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from '../src/store/index.ts'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
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

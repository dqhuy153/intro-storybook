import React, { Fragment } from 'react'
import { ColorModeScript } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/organisms/TodoScreen'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Fragment>
    <ColorModeScript />
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

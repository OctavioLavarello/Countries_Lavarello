import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'

// IMPORTS
import { BrowserRouter } from "react-router-dom"
import store from "./redux/store.js"
import { Provider } from 'react-redux'
// AXIOS.DEFAULTS
axios.defaults.baseURL = "http://localhost:3001/CountriesPI"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
  </React.StrictMode>,
)

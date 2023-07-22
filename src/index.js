import {BrowserRouter} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from "react-redux";
import store from "./Redux/store.js"


ReactDOM.render(  //! Agarro el primer elemento (único), antes de la coma y lo muestro en el segundo elemento (root del html)
  <Provider store={store}>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
)

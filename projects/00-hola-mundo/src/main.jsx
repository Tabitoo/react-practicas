import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

//Este es el punto de entrada de la aplicacion


const root = ReactDOM.createRoot(document.getElementById('root'))

//Se utilizan funciones para crear componentes
//const Button = ({text}) => {
 //  return (<button>{text}</button>)
//}

//se llama al componente dentro del react fragment con jsx como si 
//fuera una etiqueta html.
//Los parametros se pasan como si fueran atributos

root.render(
  <App />
)

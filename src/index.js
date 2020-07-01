//const element = document.createElement('h1')
//element.innerText = 'Hola mundo'
//const container = document.getElementById('root')
//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const nombre ='Martin'

const element = <h1>Dobles de riesgo {nombre}</h1>
const container = document.getElementById('root')



ReactDOM.render(element, container)
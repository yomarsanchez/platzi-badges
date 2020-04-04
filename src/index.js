// const element = document.createElement('h1')

// element.innerHTML = 'Hello Platzi Badges!!!'

// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hello Platzi Badges from React!</h1>

const container = document.getElementById('root')

// ReactDOM.render(__que__, __dónde__);
ReactDOM.render(element, container)

// const element = document.createElement('h1')

// element.innerHTML = 'Hello Platzi Badges!!!'

// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

// const elementJsx = <h1>Hello Platzi Badges from React!</h1>
// const element = React.createElement('h1', {}, 'Hello Platzi Badges!!!')
// const element = React.createElement(
//   'a',
//   { href: 'https://platzi.com', target: '_black' },
//   'Ir a platzi',
// )
const name = 'Yomar'
// const element = React.createElement('h1', {}, `Hola, soy ${name}`)
// const elementJsx = <h1>Hola, soy {name}</h1>
const elementJsx = (
  <div>
    <h1>Hola, soy {name}</h1>
    <p>Soy inginiero backend</p>
  </div>
)
const element = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, `Hola, soy ${name}`),
  React.createElement('p', {}, 'Soy inginiero frontend'),
)

const container = document.getElementById('root')
// ReactDOM.render(__que__, __dónde__);
ReactDOM.render(element, container)

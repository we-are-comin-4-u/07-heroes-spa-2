
// This is the entry point of the application
// We import the BrowserRouter component from react-router-dom
// We import the HeroesApp component
// We import the styles.css file
// We render the HeroesApp component inside the BrowserRouter component
// the main component of the application is HeroesApp

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
// import { HashRouter  } from 'react-router-dom'
// BrowserRouter is a component that allows us to use the history API  
import { HeroesApp } from './HeroesApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HashRouter>
          <HeroesApp/>
      </HashRouter>
   </React.StrictMode>
  // <React.StrictMode>
  //   <BrowserRouter>
  //   <HeroesApp/>
  //   </BrowserRouter>
  //  </React.StrictMode>
   
   ,
)

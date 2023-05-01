// import React from 'react'

  //this component to show the component AppRouters

import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
      
      <AuthProvider>
        <AppRouter/>
         {/* <h1>HeroesApp</h1> */}
      </AuthProvider>
  )
}

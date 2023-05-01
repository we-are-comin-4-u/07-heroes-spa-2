
//main router

import React from 'react'
import {  Route, Routes ,Navigate } from 'react-router-dom'
//  [] import { LogingPage } from '../auth/pages/LogingPage'
import { LogingPage } from '../auth';
// import { DcPage } from '../heroes/pages/DcPage'
import {  HeroesRoutes,  } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
 import { PublicRoute } from './PublicRoute';
// import { MarvelPage  } from '../heroes/pages/MarvelPage'
// import { Navbar } from '../ui'

export const AppRouter = () => {
 
    {/* <Route path="dc" element={<DcPage />}/> */}
          {/* <Route path="login" element={<LogingPage />}/> */}

        {/* <Route path="marvel" element={<MarvelPage />}/> */}
      {/* // <Route path="/*" element={<HeroesRoutes />}/> */}
  
       {/* <Route path="login" element= {  
      
        // return <PublicRoute> 
        {logged}?  <Navigate to="/login" /> : <LogingPage />
        // <LogingPage />
       
      //  </PublicRoute>
        }/> */}
        const [loggedIn, setLoggedIn] = React.useState(false);


  return (
    <>

    <Routes>
    <Route
      path="login"
      element={
        <PublicRoute>
          {loggedIn ? <Navigate to="/heroes" /> : <LogingPage setLoggedIn={setLoggedIn} />}
        </PublicRoute>
      }
    />

    <Route path="/*" element={
    <PrivateRoute>
      <HeroesRoutes />
    </PrivateRoute>
    } />
  </Routes>

    
    </>
  )
    }
      {/* <Navbar /> */}

      

    {/* <Routes> */}
    
       {/* <Route path="login/* " element= {
        <PublicRoute> 
          <Routes>
         <Route path='/*' element = { <Navigate to= "/marvel"/>} />
        </Routes>
       </PublicRoute> } />  */}

        {/* <Route path="login/* " element= {
        <PublicRoute> 
          <Routes>
         <Route path='/*' element = { <Navigate to= "/marvel"/>} />
        </Routes>
       </PublicRoute> } />  */}

          {/* <Route path ="/login/" element= {
            <PublicRoute>
            <LogingPage />
          </PublicRoute>}/> */}

      {/* <Route path='/*' element = { <Navigate to= "/marvel"/>} /> */}
      {/* <Route path='/*' element = { <Navigate to= "/marvel"/>} /> */}
          
          {/* <Route path="login" element={<LogingPage />}/> */}
          {/* <Route path="login" element={<LogingPage />}/> */}

{/* 
      <Route path ="/*" element= {
        <PrivateRoute>
        <HeroesRoutes />
      </PrivateRoute>}/>
        
      
     
      
    </Routes>
    </> */}
  // );
// };

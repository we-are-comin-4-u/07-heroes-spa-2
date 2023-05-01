
// This is a public route, which means that it is accessible to all users, even if they are not logged in.

import { Navigate } from "react-router-dom"
// import { Redirect } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../auth"

//

export const PublicRoute = ({children}) => {

   const {logged} = useContext(AuthContext)

   return (!logged) ? children : <Navigate to ="/marvel"/>
  //  return (!logged) ? children : <Navigate to ="/dc"/>
  }

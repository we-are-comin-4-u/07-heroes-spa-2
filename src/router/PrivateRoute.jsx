
// This is a private route component that will be used to protect routes that require authentication

import { useContext, useMemo } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute = ({children}) => {

  const {pathname,search} = useLocation();

   const lastPath = useMemo(()=> pathname + search , [pathname,search]);

   localStorage.setItem('lastPath', lastPath);

  //  console.log('re-render');

   const {logged} = useContext(AuthContext)

  return (logged) ? children : <Navigate to ="/login"/>
}

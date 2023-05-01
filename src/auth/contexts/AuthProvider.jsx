import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

// const initialState = {
//    lagged:false,
// }

const init = () => {
  const user = JSON.parse(localStorage.getItem('user')) 

   return {
      lagged: !! user,
      user: user
   }
}

export const AuthProvider = ({children}) => {

   const [authState,dispatch] = useReducer(authReducer, {}, init)// is a hook that is used for state management. It is an alternative to useState(). The useReducer() hook takes in a reducer function and an initial state as arguments. The reducer function takes in the current state and an action as arguments and returns a new state. The action is an object that has a type property and a payload property. The type property is a string that describes the action that is being performed. The payload property is an object that contains the data that is needed to perform the action. The useReducer() hook returns an array that contains the current state and a dispatch function. The dispatch function is used to dispatch an action to the reducer function. The reducer function then returns a new state based on the action that was dispatched. The useReducer() hook is useful when you have complex state logic that involves multiple sub-values or when the next state depends on the previous state. You can learn more about useReducer() here: https://reactjs.org/docs/hooks-reference.html#usereducer
   // const [authState,dispatch] = useReducer(authReducer, initialState, init)// is a hook that is used for state management. It is an alternative to useState(). The useReducer() hook takes in a reducer function and an initial state as arguments. The reducer function takes in the current state and an action as arguments and returns a new state. The action is an object that has a type property and a payload property. The type property is a string that describes the action that is being performed. The payload property is an object that contains the data that is needed to perform the action. The useReducer() hook returns an array that contains the current state and a dispatch function. The dispatch function is used to dispatch an action to the reducer function. The reducer function then returns a new state based on the action that was dispatched. The useReducer() hook is useful when you have complex state logic that involves multiple sub-values or when the next state depends on the previous state. You can learn more about useReducer() here: https://reactjs.org/docs/hooks-reference.html#usereducer

   const login = ( name = '') => {

      const user = { id:'ABC', name } //

      const action = { 
         type: types.login,
            payload: user
      }

      localStorage.setItem('user', JSON.stringify(user));

      dispatch(action)
   }

   const logout = () => {
      localStorage.removeItem('user');
      const action = {
         type: types.logout,
         
      }
      dispatch(action)
   }

  return (
   
   <AuthContext.Provider value={{
      //prooperties
      ...authState,
      //methods
      login:login,
      logout:logout
    }}>
      {children}
   </AuthContext.Provider>
  
  )
}

import { types } from "../types/types"

// const initialSate = {
//    logged: false
// }



// export const authReducer = ( state = initialState, action) => {
export const authReducer = ( state = {}, action) => {

   switch ( action.type) {
      case types.login:
         return {
            ...state,
            logged: true,
            user: action.payload
         };

      case types.logout:
         return {
            logged: false,
            name: null
         };

         default:
            return state;
   }

}
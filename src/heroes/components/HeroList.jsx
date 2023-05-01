
// this component is going to show the list of heroes

import { useMemo } from 'react'
import { HeroCard } from './HeroCard'
import { getHeroeByPublisher } from "../helpers"



export const HeroList = ({publisher}) => {

   const heroes = useMemo(() => getHeroeByPublisher(publisher),[publisher]) 

  return (

   // <div className='row rows-cols-1 rows-cols-md-3 g-3'>
   <div className='d-flex flex-wrap animate__animated animate__fadeIn col mt-2'>
       {
         heroes.map(hero => (
            //  <li key={ hero.id }>
               
            //    { hero.superhero }
            //  </li>
           < HeroCard 
               key={hero.id}
               {...hero}
           />
         ))
       }
   </div>
    
   
  )
}

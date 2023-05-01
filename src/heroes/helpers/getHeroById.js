import { heroes } from "../data/heroes"

// This is a helper function that will be used to get a hero by i
export const getHeroById = (id) => {
  
   return heroes.find( hero => hero.id === id) 

}

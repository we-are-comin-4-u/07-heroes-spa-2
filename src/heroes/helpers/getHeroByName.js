
// Función que retorna un arreglo de heroes que coincidan con el nombre
// de búsqueda
// Si no se envía un nombre, retorna un arreglo vacío
import {heroes} from '../data/heroes';

export const getHeroByName =( name = '') => {
   name = name.toLocaleLowerCase().trim();

   if( name.length === 0) return [];
      
   return heroes.filter(
      hero => hero.superhero.toLocaleLowerCase().includes(name)
   );
}
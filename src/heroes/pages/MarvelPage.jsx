
  // this component show the contet of the page MarvelPage
  // Importamos el componente HeroList

import { HeroList } from "../components"

export const MarvelPage = () => {
  return (
    <>
    <h1>MarvelPage</h1>
    <hr className="rounded-pill" />
    <HeroList publisher='Marvel Comics' />
    
    </>
  )
}

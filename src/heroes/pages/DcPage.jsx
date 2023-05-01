import { HeroList } from "../components"
// import { getHeroeByPublisher } from "../helpers"


  // this is a component that will be used in the HeroList component

  // this show the content of the page DcPage

export const DcPage = () => {

  // const heroes = getHeroeByPublisher(publisher)

  return (
    <>
     <h1>DcComics</h1>
    <hr className="rounded-pill" />

      <HeroList publisher='DC Comics' />
      
    </>
  )
}

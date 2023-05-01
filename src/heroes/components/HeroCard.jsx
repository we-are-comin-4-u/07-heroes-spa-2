
   // this is a component that will be used in the HeroList component
   // this  component will be used to show the list of characters of a hero   

import { Link } from "react-router-dom";
import "./Herocard.css";

const CharactersByHero = ({ alter_ego, characters }) => {
   // if (alter_ego === characters) return (<></>);
   // return (<p>{characters}</p>);
   return ( alter_ego === characters ) 
      ? ( <></> )
      : (<p>{ characters }</p>)
}

export const HeroCard = ({
   id,
   superhero,
   publisher,
   alter_ego,
   first_appearance,
   characters,
}) => {

   const heroImageUrl = `./assets/heroes/${id}.jpg`;

   // const charactersByHero = <p className="card-text">{characters}</p>

  return (
   
     <div className="  m-1 col-3">
      <div className="card ">
       <div className="row no-gutters ">
         <div className=" col-4  ">
            <img src={heroImageUrl} className="  card-img animate__animated animate__bounce animate__delay-2s"   alt={superhero} />
         </div>
             
         <div className=" col-8">
            <div className="card-body">
               <h5 className="card-title">{superhero}</h5>
               <p className="card-text">{alter_ego}</p>
               {/* {
                  // (alter_ego !== characters) && <p className="card-text">{characters}</p>
                  (alter_ego !== characters) && charactersByHero
               } */}
               {/* <p>{characters}</p> */}
               <CharactersByHero characters={characters} alter_ego={alter_ego} />
               <p className="card-text">
                  <small className="text-muted">{first_appearance}</small>
               </p>
               <Link to={`/hero/${id}`}>
                  more..
               </Link>
               
            </div>
         </div>
            
      </div>

      </div>

    </div>
   
  )
}

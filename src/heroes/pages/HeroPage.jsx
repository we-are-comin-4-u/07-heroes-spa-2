
// this is the component that will be rendered when the user clicks on a hero
import {useMemo} from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";


  // this is a component that show the content of the page HeroPage

export const HeroPage = () => {

  

  const { id } = useParams();
  
  const navigate = useNavigate();
 
  

  const hero = useMemo(() => getHeroById( id ), [ id ]); // this is a hook that will be executed only when the id changes


  const onNavigateBack = () => {

    navigate(-1);
    
  }

  const heroImageUrl = `./assets/heroes/${id}.jpg`;
    
  if (!hero) {

    return <Navigate to="/marvel" />
    
  }

  return (
    <div className="row mt-5">
      <div className="col-3">
      
        <img
          // src={`/assets/heroes/${id}.jpg`}
          src={heroImageUrl}
          alt={hero.superhero}
          // className="img-thumbnail"
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
    
<div className="col-8">
  <h3>{hero.superhero}</h3>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"><b>Alter ego: {hero.alter_ego}</b></li>
      <li className="list-group-item"><b>Publisher: {hero.publisher}</b></li>
      <li className="list-group-item">
        <b>First appearance: {hero.first_appearance}</b>
      </li>

          
        </ul>
        <h5>Characters</h5>
        <p>{hero.characters}</p>
        <button 
          className="btn btn-outline-primary rounded-pill"
          onClick={onNavigateBack}
        >
          Back
        </button>

      </div>

    
    </div>
   
      
      
  )
}

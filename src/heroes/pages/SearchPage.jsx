
 //this component show the contet of the page SearchPage

import { createSearchParams, useLocation, useNavigate, useSearchParams } from "react-router-dom";
// import queryString from "query-string";
import { useMemo } from "react";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroByName } from "../helpers"

export const SearchPage = () => {

  const navigate = useNavigate();
  
  // const location = useLocation();

  // const location = useLocation()
  // const searchParams = new URLSearchParams(location.search)
  // const params = Object.fromEntries(searchParams.entries())
  // console.log(params)
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q') || '' 

  const heroes = getHeroByName(q);
  
  const showSearch = useMemo(() => q.length === 0);
  const showError = useMemo ( () => q.length > 0 && heroes.length === 0);
  // console.log(showSearch) ;
  // console.log({showError});
  // console.log({q});
  // navigate({search: createSearchParams({q: searchText}).toString()});
   

  // const {q = ''} = queryString.parse(location.search);
  // console.log({query});
  const {searchText, onInputChange} = useForm({
    searchText: "" 
  });

  
    
  
  

  const onSearchSumit = (event) => {

    event.preventDefault();

    

    // if(searchText.trim().length <= 2) return;
    // if(searchText.trim().length <= 2) return;

    navigate({search: createSearchParams({q: searchText}).toString()});
    // navigate({search: searchParams({q: searchText}).toString()});
    //  navigate(`?q=${ searchText.toLowerCase().trim()}`)
    // console.log({searchText});
    // console.log({q});
    
  }

  return (
    <>
      <h1>Search</h1>
      <hr  className="rounded-pill" style={{backgroundColor:"white"}}/>
      <div className="row">
      <div className="col-5">
        <h4>Search Form</h4>
        <hr className="rounded-pill" />
        <form onSubmit={onSearchSumit}>
          <input 
            type="text" 
            placeholder="Search a hero"
            className="form-control text-center rounded-pill btn-outline-info"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
            />
          <button className="btn btn-outline-primary mt-3 rounded-pill">
            Search...
          </button>
        </form>
      </div>

      <div className="col-7">
        <h4>Results</h4>
        <hr className="rounded-pill" />

        {/* {
          (q === '' )
            ? <div className="alert alert-primary text-sm-center rounded-pill">Search a hero</div>
            : (heroes.length === 0) 
            && <div className="alert alert-danger text-center rounded-pill"> There is not results with {q}</div>
        
        } */}

          <div className="alert alert-primary text-sm-center rounded-pill animate__animated animate__pulse"
           style={ {display : showSearch ? '' : 'none'}}>
            Search a hero
        </div>
       
      <div className="alert alert-danger text-center rounded-pill animate__animated animate__pulse"
       style= {{display : showError ? '' : 'none'  }}>
        There is no Results with {q}
      </div> 
        {
          heroes.map( hero => (

             <HeroCard key={ hero.id } { ...hero }/> 
          ))
        }
      </div>

    </div>
    
    </>
    
  )
}


// this is the main route for the heroes app

import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, HeroPage, MarvelPage,  SearchPage } from '../pages';
export const HeroesRoutes = () => {
  return (
    <>
    
      <Navbar />
      <div className='container'>

      <Routes>
      <Route path="marvel" element={<MarvelPage />}/>
      <Route path="dc" element={<DcPage />}/>
      <Route path="search" element={<SearchPage />}/>
      <Route path="hero/:id" element={<HeroPage />}/>
      {/* { search, hero by id} */}
      {/* <Route path="login" element={<LogingPage />}/> */}
      <Route path="/" element={<Navigate to="/marvel" />}/>
      </Routes>
      </div>
    </>
  )
}

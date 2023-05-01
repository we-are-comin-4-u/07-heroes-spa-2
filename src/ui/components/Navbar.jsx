
 // this the 

import { useContext } from 'react';
import { Link, NavLink, useHref, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {

     const {user,logout } = useContext(AuthContext)

        // console.log(props);
    const navigate = useNavigate();

    const onLogout = () => {
        // console.log('Logout');
        logout();
        navigate('/login',{
            replace: true
        });
    }

    return (
        // <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
        <nav className="navbar navbar-expand-sm  p-2 mt-2" style={{backgroundColor : "#F5F5F5"}}>
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
               associations
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                  <span className='nav-item nav-link text-info'>
                        {user?.name}
                  </span>

                  <button 
                  className='nav-item nav-link btn'
                  onClick={ onLogout}
                //   onClick={ () => {console.log('Logout')}}
                  >
                     Logout
                  </button>
                    {/* <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/login"
                    >
                        Logout
                    </NavLink> */}
                </ul>
            </div>
        </nav>
    )
}
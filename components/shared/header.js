import React from "react";
import Link from 'next/link';
import auth0 from '../services/auth0';

const Header = (props)=>{

   // const { isAuthenticated, user, className } = props;

   const { isAuthenticated } = props;
   console.log(isAuthenticated);

    const Login = () => {
        
        return (
            <Link href='/'>
            <a className="nav-link " onClick={auth0.login}> Login </a>
            </Link>
        )
      }
      
      const Logout = () => {
        return (
       <Link href='/'>
          <a className="nav-link" onClick={auth0.logout}> Logout </a>
          </Link>
        )
      }

    return(
        <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
         <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link href='/'>
                <a className="nav-link" >Home
                <span className="sr-only">(current)</span>
                </a>
                </Link>
            </li>

            <li className="nav-item">
            <Link href='/about'>
                <a className="nav-link" >About</a>
                </Link>
            </li>

            <li className="nav-item">
                <Link href='/services'>
                <a className="nav-link" >Services</a>
                </Link>
            </li>

            <li className="nav-item">
                <Link href='/contact'>
                <a className="nav-link" >Contact</a>
                </Link>
            </li>
             
              { !isAuthenticated &&
                <li className="nav-item">
                <Login />
                  </li>
              }
              
              { isAuthenticated &&
                <li className="nav-item">
                <Logout />
                </li>
              }
            </ul>
          </div>
         </div>
         </nav>
        </div>
    )
}

export default Header;
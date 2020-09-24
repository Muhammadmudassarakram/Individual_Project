import React from "react";
import Link from 'next/link';
import auth0 from '../services/auth0';
import { useRouter } from 'next/router';

const Login = () => {
  return (
    <span onClick={auth0.login} > Login </span>
  )
}

const Logout = () => {
  return (
    <span onClick={auth0.logout}> Logout </span>
  )
}
export default class Navebar extends React.Component {

    constructor(props){

     super(props);

   }
   
          
     render(){
      const { isAuthenticated } = this.props;
      
    return(
        <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
         <div className="container">
         <Link href='/' as={`/`}>
          <a className="navbar-brand" >Desi-Recipe</a>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link href='/'>
                <a className="nav-link" >Home</a>
                </Link>
            </li>

            <li className="nav-item">
            <Link href='/about' as={`/about`}>
                <a className="nav-link" >About</a>
                </Link>
            </li>

            <li className="nav-item">
                <Link href='/services' as as={`/services`}>
                <a className="nav-link" >Services</a>
                </Link>
            </li>

            <li className="nav-item">
                <Link href='/contact' as={`/contact`}>
                <a className="nav-link" >Contact</a>
                </Link>
            </li>
             
            { !isAuthenticated.isAuthenticated && 
                <li className="nav-item">
                  <Link href='/' as={`/`}>
                  <a className="nav-link" ><Login /></a>
                  </Link>
                </li>
              }
              { isAuthenticated.isAuthenticated &&
                <li className="nav-item">
                  <Link href='/' as={`/`}>
                  <a className="nav-link" ><Logout /></a>
                  </Link>
                </li>
              }
            </ul>
          </div>
         </div>
         </nav>
        </div>
    )
  }
}

import React from 'react'
import Styles from "./navbar.module.css"
import { useParams, Link } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated } = useParams();
  var auth = false;
  if(isAuthenticated === "shlok")
    auth = true;
  return (
    <div className={Styles.Navbar}>
        <div className={Styles.logoImg}>
            <img src="/images/logo.png" alt="logo_image" />
        </div>
        <div className={Styles.searchbar}>
            <img src="/images/search_icon.png" alt="" />
            <p>Search for your favorite groups in ATG</p>
        </div>
        <div className={Styles.createAccount}>
            {auth ? <p>Shlok</p> : <p> <Link className={Styles.Link} to='/join'>Create Account <span>it's free!</span></Link></p> }
            <img src="/images/drop_down.jpg" alt="" />
        </div>
    </div>
  )
}

export default Navbar;
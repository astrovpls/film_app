import React from 'react'
import { Link } from "react-router-dom";
import s from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={s.navBar}>
      <div className={s.navBarL}>
        <div className={s.logo}>Logo</div>
        <ul className={s.navList}>
          <li>
            <Link to='/list/popular' >Popular</Link>
          </li>
          <li>
            <Link to='/list/top_rated' >Top Rated</Link>
          </li>
          <li>
            <Link to='/list/upcoming' >Upcoming</Link>
          </li>
        </ul>
      </div>
      <Link to='/search' className={s.navBarR}>Search</Link>
    </nav>
  )
}

export default NavBar

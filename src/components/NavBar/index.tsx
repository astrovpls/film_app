import React from 'react'
import { Link } from 'react-router-dom'
import s from './NavBar.module.scss'

interface Props {
  className: string
}

const NavBar = () => {
  
  const NavList: React.FC<Props> = ({ className }) => (
    <ul className={[s.navList, className].join(' ')}>
      <li>
        <Link to="/list/popular">Popular</Link>
      </li>
      <li>
        <Link to="/list/top_rated">Top Rated</Link>
      </li>
      <li>
        <Link to="/list/upcoming">Upcoming</Link>
      </li>
    </ul>
  )

  return (
    <>
      <nav className={s.navBar}>
        <div className={s.navBarL}>
          <div className={s.logo}>Logo</div>
          <NavList className={s.navList}/>
        </div>
        <Link to="/search" className={s.navBarR}>
          Search
        </Link>
      </nav>
      <NavList className={s.navListM}/>
    </>
  )
}

export default NavBar

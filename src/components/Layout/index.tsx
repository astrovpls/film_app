import React from 'react';
import NavBar from '../NavBar'
import s from './Layout.module.scss'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className={s.layout}>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
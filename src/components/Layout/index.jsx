import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar'
import s from './Layout.module.scss'

const Layout = ({children}) => {
  return (
    <div className={s.layout}>
      <NavBar />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
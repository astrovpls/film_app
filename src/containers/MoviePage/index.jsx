import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom'

const MoviePage = () => {
  const { id } = useParams()

  return (
    <>
      <header></header>
      
    </>
  );
};

MoviePage.propTypes = {};

export default MoviePage;
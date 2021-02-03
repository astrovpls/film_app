import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { EventPlaceholder, Loader } from '../Icons'

const Img = props => {
  const [loadState, setLoadState] = useState(0)
  const b = new Image()
  b.src = props.src
  b.onload = () => setLoadState(1)
  b.onerror = () => setLoadState(-1)
  
  if (loadState === 1) {
    return (
      <img
        className={props.className}
        src={props.src}
        alt={props.alt}
      />
    )
  } else if (loadState === 0) {
    return (
      <Loader className={'image-loader'}/>
    )
  } else {
    return (
      <EventPlaceholder className={'image-loader'}/>
    )
  }
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
}

export default Img
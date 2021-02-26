import React, { useState } from 'react'
import s from './Img.module.scss'
import ColorThief from 'colorthief'
import PropTypes from 'prop-types'
import { ImagePlaceholder, Loader } from '../Icons'

const Img = ({ className, src, alt, getColorCallback }) => {
  const [loadState, setLoadState] = useState(0)
  const b = new Image()
  b.crossOrigin = 'anonymous'
  b.src = src
  b.onload = () => {
    setLoadState(1)
    if (getColorCallback) {
      const getColor = new ColorThief()
      const a = getColor.getColor(b)
      getColorCallback(a)
    }
  }
  b.onerror = () => setLoadState(-1)

  if (loadState === 1) {
    return <img className={className} src={src} alt={alt} />
  } else if (loadState === 0) {
    return <Loader className={s.loader} />
  } else {
    return <ImagePlaceholder className={[s.placeholder, className].join(' ')} />
  }
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
}

export default React.memo(Img)

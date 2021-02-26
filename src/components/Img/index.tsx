import React from 'react'
// import s from './Img.module.scss'
import { Img } from 'react-image'
import { useColor } from 'color-thief-react'
import { /*ImagePlaceholder,*/ Loader } from '../Icons'

interface Props {
  className?: string
  src: string
  alt?: string
  getColorCallback?: (color: number[] | undefined) => void
}

const ImgWrap: React.FC<Props> = ({ className, src, alt, getColorCallback }) => {
  const crossOrigin = 'anonymous'
  const quality = 10
  const { data } = useColor(src, 'rgbArray', { crossOrigin, quality })
  if (getColorCallback) {
    getColorCallback(data)
  }

  return <Img src={src} loader={<Loader />} className={className} alt={alt} />
}

export default React.memo(ImgWrap)

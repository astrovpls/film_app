import React from 'react'
import { Link } from 'react-router-dom'
import s from './Pagination.module.scss'
import PropTypes from 'prop-types'

const Pagination = ({ current, total, link }) => {
  
  const range = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx)
  }

  const getRange = (currentPage, totalPages, pageNeighbours = 2, leftArrow, rightArrow) => {
    /*
     * totalNumbers: кооичество отображаемых страниц
     * totalBlocks: totalNumbers + 2 (кнопки влево, вправо)
    */
    const totalNumbers = pageNeighbours * 2
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours)
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours)
      let pages = range(startPage, endPage)

      /*
       * hasLeftSpill: есть доступные страницы слева
       * hasRightSpill: есть доступные страницы справа
       * spillOffset: количество доступных страниц слева или справа
      */
      const hasLeftSpill = startPage > 2
      const hasRightSpill = totalPages - endPage > 1
      const spillOffset = totalNumbers - pages.length

      switch (true) {
        // случай (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1)
          pages = ['LEFT', ...extraPages, ...pages]
          break
        }

        // случай (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset + 2)
          pages = [...pages, ...extraPages, 'RIGHT']
          break
        }

        // случай (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = ['LEFT', ...pages, 'RIGHT']
          break
        }
      }

      return [1, ...pages, totalPages]
    }
  }

  return <div className={s.pagination}>
    {getRange(current, total).map((el, index) => <Link to={`${link}?page=${el}`} className={current === el ? s.active : undefined} key={index}>{el}</Link>)}
  </div>
}

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}

export default Pagination

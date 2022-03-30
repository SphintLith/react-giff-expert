import React from 'react'
import PropTypes from 'prop-types'

const GiffGridItem = ( {title,url} ) => {
  return (
    <div className="card animate__animated animate__fadeInDown">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
GiffGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
export default GiffGridItem
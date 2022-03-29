import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GiffGridItem from './GiffGridItem'

const GiffGrid = ({ category }) => {

  const {data:images,loading} = useFetchGifs(category)

  return (
    <>
      <h3 className='animate__animated animate__fadeInDown'>{ category }</h3>
      {loading && <p>Loading . . . </p>}
      <div className='card-grid'>
        {
          images.map(image =>
            <GiffGridItem
              key={ image.id }
              { ...image }
            />
          )
        }
      </div>
    </>
  )
}
export default GiffGrid
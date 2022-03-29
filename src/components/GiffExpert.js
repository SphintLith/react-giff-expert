import React, { useState } from 'react'
import AddCategory from './AddCategory'
import GiffGrid from './GiffGrid'

const GiffExpert = () => {
  /** const categories = ['One punch man','Samurai X','Dragon Ball','Tatsumaki']*/
  const [categories, setCategories] = useState(['zoro'])

  return (
    <>
      <h2>GiffExpert</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />
      <ol>
        {
          categories.map(category => (
            <GiffGrid
              key={category}
              category={category}/>
          ))
        }
      </ol>
    </>
  )
}
export default GiffExpert
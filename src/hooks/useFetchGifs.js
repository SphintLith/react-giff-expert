import { useEffect, useState } from 'react'
import { getGiff } from '../helpers/GetGiffs'

export const useFetchGifs = (category) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  })
  useEffect(()=>{
    getGiff(category)
    .then(imgs=>{
        setState({
          data:imgs,
          loading:false
        })   
    })
  },[category])
  /* setTimeout(()=>{
    setState({
      data:[,1,2,3,4,5,6],
      loading:false
    })
  },3000) */
  return state
}
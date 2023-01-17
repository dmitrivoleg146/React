import React from 'react'
import Axios from "axios"
import { useQuery } from '@tanstack/react-query'
import { useGetCat } from './useGetCat'

const Cat = () => {
    const {data, isCatLoading, refetchData} = useGetCat();
    if(isCatLoading){
        return <h1>Is Loading...</h1>
    }
  return (
    <div>
        <button onClick={refetchData}>Refetch</button>
        <h1>{data?.fact}</h1>
    </div>
  )
}

export default Cat
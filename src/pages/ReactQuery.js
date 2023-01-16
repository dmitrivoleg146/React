import React from 'react'
import Axios from "axios"
import {useQuery} from "@tanstack/react-query"

export const ReactQuery = () => {
  const {data:catData, isLoading, isError, refetch} = useQuery(["cat"],()=>{
     return Axios.get("https://catfact.ninja/fact")
     .then((res)=>res.data);
  });
  if(isError){
    return <p>Sorry there is an error...</p>
  }
  if(isLoading){
    return <p>Is Loading...</p>
  }
  return (
    <div>
      <p>{catData?.fact}</p>
      <p>{catData?.length}</p>
      <button onClick={refetch}>Update Data</button>
    </div>
  )
}

import { Axios } from "axios"
import { useQuery } from "@tanstack/react-query";

export const useGetCat =()=>{
     // try to put Api into custom hook
    const {data,
         refetch, 
         isLoading: isCatLoading,
         error} = useQuery(["cat"], async ()=>{
       return Axios.get("https://catfact.ninja/fact")
        .then((res)=>res.data)
    })

    const refetchData =()=>{
        alert("data refetched");
       refetch();
    }

    if(error){
 
    }



    return {data, refetchData, isCatLoading};
}
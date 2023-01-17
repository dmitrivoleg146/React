import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import Cat from './Cat'


const QueyCat = () => {
    const client = new QueryClient({
        defaultOptions:{
            queries: {
                refetchOnWindowFocus:true,
            }
        }
    })
  return (
    <div>
        <QueryClientProvider client={client}>
            <Cat/>
        </QueryClientProvider>
    </div>
  )
}

export default QueyCat
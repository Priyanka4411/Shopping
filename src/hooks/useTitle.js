import  { useEffect } from 'react'

 export const useTitle = (title1) => {

  useEffect(()=>{
    document.title=`${title1} | Shopping Cart`;
  },[title1]) 
  return (
   null
  )
}



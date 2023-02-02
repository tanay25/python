//import React,{useEffect} from 'react'
//import React,{useMemo} from 'react'
import React,{useCallback} from 'react'
export default function Child() {
  // useEffect(()=>{
  //   console.log("Child is Called")
  // },[])


  // useMemo(()=>{
  //   console.log("Child is Called")
  // },[])

  useCallback(()=>{
    console.log("Child is Called")
  },[])
  return (
    <>
      <h1>This is Child Component</h1>
    </>
  )
}

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Error() {
  var navigate = useNavigate()
  useEffect(()=>{
    navigate("/")
  },[])
  return (
    <div>404!!!! Page not Found</div>
  )
}

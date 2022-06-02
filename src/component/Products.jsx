import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const [prdata, setprdata] = useState([])
  
useEffect(() => {
 
  function data(){
    fetch("http://localhost:8080/products")
    .then((r)=> r.json())
    .then((d)=>
    //console.log(d)
    setprdata(d)
    )
  }
data() 
  
}, [])
return (<div>

  {prdata.map((e)=>{
      return <div key={e.id}> {e.name}  ||  {e.price }  
      <Link to={`/products/${e.id}/${e.price}/${e.name}`} value = {e}> More Details 
      </Link> 
          </div>
    })}
    
    </div>)
 
}

export default Products
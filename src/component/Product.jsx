import React from 'react'
import { useParams } from 'react-router-dom'

const Product = (props) => {

  const {id,price,name}=useParams()
  console.log(id)
  return (
    <div>
      
    
      <h1>Product {name} no {id} at price {price }</h1>
    </div>
  )
}

export default Product
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const AddItem = ({add}) => {
    const [newproduct, setNewProduct] = useState({
        id: 0,
        product: '',
        price: ''
    })

    const handleChanges = (e) => {
        setNewProduct({...newproduct, [e.target.id]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        add({...newproduct, id: uuidv4()})
        setNewProduct({
            id: 0,
            product: '',
            price: ''
        })
    }


  return (
    <div className="item">
    <form onSubmit={handleSubmit}>
        <input type="text" value={newproduct.product} placeholder="Enter Product" id="product" onChange={handleChanges} required/>
        <input type="number" value={newproduct.price} placeholder="Enter Price" id="price" onChange={handleChanges} required/>
        <input type="submit" value="Add"/>
    </form>
    </div>
  )
}

export default AddItem
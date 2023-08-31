import React from 'react'

const ListProducts = ({ items, deleteItems }) => {
  return (
    <div>
    <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Edit</p>
        </div>
      {
        items.length <= 0 ? 
          <div className="text">There are no items, Try to add some.</div>
          :
          items.map(item => {
              return  <div key={item.id} className="item">
                <p>{item.product}</p>
                <p>{item.price}</p>
                <p className="delete" onClick={() => deleteItems(item.id)}>&times;</p>
                </div>
          })
        }
    </div>
  )
}

export default ListProducts
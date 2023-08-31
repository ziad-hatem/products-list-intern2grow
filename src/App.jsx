import { useState } from 'react'
import AddItem from './components/AddItem'
import './App.css'
import ListProducts from './components/ListProducts';
import Total from './components/Total';
function App() {
  // let itemsArr = [
  //       {id:1, product:'Pen', price:2},
  //   {id:2, product:'Book', price:10}
  // ]
  const [items, setItems] = useState([
    {id:1, product:'Pen', price:2},
    {id:2, product:'Book', price:10}
  ])

  const deleteItem = (id) => {
    setItems(
      items.filter(ele => {
        return ele.id !== id;
      })
    )
  }

  const addItem = (item) => {
    const temp = [...items]
    temp.push(item)
    setItems(temp)
  }

  return (
  <div className="container">
    <h1>Product List React App</h1>
    <div className="table">
      <ListProducts items={items} deleteItems={deleteItem}/>
      <AddItem add={addItem}/>
      <Total items={items}/>
    </div>
  </div>
  )
}

export default App

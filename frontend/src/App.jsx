
import './App.css'

import  { useEffect, useState } from 'react'
// i want to access my api here
// if you want to use something from backend we need to
//install corse to make connection between frontend and backend

export const App = () => {
  const [products, setProducts] = useState([]);
  //this the link from the backend vercel
  useEffect(() => {
    fetch('https://vercel-express-ivory-zeta.vercel.app/products')
      //to convert data to json
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <div>{
      products.length > 0 &&products.map((product) =><article key={product._id}>
        <h2>NAME:{product.name}</h2>
        <p>PRICE:{product.price}</p>

      </article>)
      
      
      }</div>
  )
}

export default App

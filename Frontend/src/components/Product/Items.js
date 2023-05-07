import React, { useEffect, useState } from 'react';
import "./Item.css";
import axios from 'axios'
import Item from './Item'; 
const URL = "http://localhost:5000/books";


const fetchHandler = async() => {
 return await axios.get(URL).then((res) => res.data)
  }

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {

  fetchHandler().then(data=>setItems(data.books) )


  },[]);
  console.log(items);
    
  return (
    <div>
      <ul type="none">
        {items && items.map((item,i)=>(
          <li className="book" key={i}>
            <Item book={item}/>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Items

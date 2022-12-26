import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Cards from './cards.jsx'
function App() {
    const [data, setData] = useState([]);
      const getData = async () => {
        const res = await axios.get('http://localhost:6969/posts')
        setData(res.data.data);
        console.log(res.data.data)
      };
      useEffect(() => {
        getData();
      }, []); 
      
      
  return (
    <div>
     {data &&
            data.map((data) => {
              return <Cards data = {data}/>;
            })}
    </div>
  )
}

export default App

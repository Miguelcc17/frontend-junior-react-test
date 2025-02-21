import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const {data: response} = await axios.get('https://rickandmortyapi.com/api/character');
        setData(response.results);
        console.log(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className='Container'>
        <h1>Personajes Rick & Morty</h1>
        <div className='row'>
          {data.map(item => (
            <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={item.image} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.status}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App

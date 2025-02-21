import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

    const fetchData = async (query = '') =>{
      try {
        const {data: response} = await axios.get(`https://rickandmortyapi.com/api/character?name=${query}`);
        setData(response.results);
      } catch (error) {
        console.error(error.message);
      }
    }

    useEffect(() => {
        fetchData()
  }, []);

  const searchInput = (e) => {
    const {value} = e.target;
    setSearch(value);
    fetchData(value);
  }
  return (
    <>
      <div className='Container'>
        <h1>Personajes Rick & Morty</h1>
        <div className='row mb-4'>
        <input type="text" className="form-control" value={search} onChange={searchInput}></input>

        </div>
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
  );
}

export default App;

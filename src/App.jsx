import React, { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import SearchIcon from './assets/search.svg'
import MovieCard from './components/MovieCard';

const API_URL = import.meta.env.VITE_API_URL;


const App = () => {

  const [movies,setMovies]= useState([]);
  const [searchTerm, setsearchTerm]= useState('');

  const searchMovies=async (title) => {
     const response = await fetch(`${API_URL}&s=${title}`)
     const data = await response.json();

     setMovies(data.Search);
     
  }

  useEffect(() => {
    
    searchMovies('Superman');
  }, [])
  
  return (
    <div className="app">
      <h1>MovieHouse</h1>
      
       <h2>Collection of movies</h2>
      <div className="search">
        <input 
        placeholder='Search For Movies' 
        value={searchTerm}
        onChange={(e)=>setsearchTerm(e.target.value)}
        /> 
        <img 
        src={SearchIcon} 
        alt="search" 
        onClick={()=>searchMovies(searchTerm)}/>
      </div>

  {/* dinamic block of code  */}
      { movies?.length>0
         ?(
          <div className='container'>
     
           {movies.map((movie)=>(
              <MovieCard movie={movie}/>
           ))}
         </div>
         ):(
          <div className='empty'>
               <h2>No moives found</h2>
          </div>
         )
      }
       <footer className="footer">
         <p>
            Made with <span className="heart">❤️</span> by <span className="name">Akshay Mathur</span>
         </p>
       </footer> 
    </div>
     


    
  )
}

export default App
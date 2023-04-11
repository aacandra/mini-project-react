import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar'
import "./style.css"
import Axios from 'axios'
import Footer from './components/Footer'
import { Carousel } from 'react-bootstrap'



function App() {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    Axios({
       method: 'get',
       url: 'https://api.themoviedb.org/3/trending/movie/week?api_key=1e05d6c6fe757614cf08f4083d927aaf',
      })
       .then(function (response) {
       console.log(response)
       setTrendingMovies(response.data.results)
      });
  }, [])  


  const trendingMoviesList = () => {
    return trendingMovies.map((movie, i) => {
      return (
        
        <div className="movie-wrapper" key = {i}>
          <div className='card'></div>
            <div className='poster'>
           <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
           </div>
           <div className='info'>
           <div className="movie-tittle ">{movie.title}</div>
          <div className="vote-average" >{movie.vote_average}</div>
          </div>
        <div className="overview">
          <div><p className='movie-id'>Movie ID:{movie.id}</p></div>
          <div><h4 className='overviews'>Overview:</h4></div>
          <div><p className='overview-info'>{movie.overview}</p>
          </div>
          
          </div>
         </div>
      )
    })
  } 
  
  console.log({trendingMovies: trendingMovies})  
  
  return (
       
    <div className="myBG">
         <div className="jumbo">
            <container className="text-white d-flex justify-content-center" > 
              <row>
                
                <div className='tittle'>Welcome.</div>
                 <div className='second-tittle'>Millions of movies, TV shows and people to discover. Explore now.</div>
              </row>
            </container>
          </div>
          <div>
            {/* <Carousel/> */}
          </div>
    
   <div className="trending">
     <container>
       <h2>Trending</h2>
     </container>
     <div className="trending-card">           
       {trendingMoviesList()}
     </div>
    </div>
    <div className='footer'>
      <div>
        <Footer/>
      </div>

    </div>
    </div>
    
     
  )
}

export default App

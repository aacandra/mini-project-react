import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar'
import "./style.css"
import Axios from 'axios'
import Footer from './components/Footer'
import ImageCarousel from './components/ImageCarousel'
import TrendingMovieList from './components/movieList'



function App() {
  return (
       
    <div className="myApp">
         <div className="jumbo">
         <ImageCarousel/> 
          </div>
          
          <div>
            <TrendingMovieList/>
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

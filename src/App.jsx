import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigationbar from './components/NavigationBar'
import "./style.css"
import Trending from './components/Trending'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="myBG">
      <Navigationbar/>
          <div className="jumbo">
            <container className="text-white d-flex justify-content-center" > 
              <row>
                
                <div className='tittle'>Welcome.</div>
                 <div className='second-tittle'>Millions of movies, TV shows and people to discover. Explore now.</div>
              </row>
            </container>
          </div>

          <div className='trending'>
           <container>
           <Trending/>
           </container>
         </div>
    </div>

     
  )
}

export default App

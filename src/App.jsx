import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigationbar from './components/NavigationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navigationbar/>
      
      
      
    </div>
  )
}

export default App

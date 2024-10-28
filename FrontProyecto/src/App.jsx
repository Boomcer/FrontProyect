import { BrowserRouter,Routes,Route } from "react-router-dom"
import Product from '../src/views/ProductScreen'
import Home from '../src/views/HomeScreen'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Product" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
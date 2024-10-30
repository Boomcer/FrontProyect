import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from '../src/views/HomeScreen'
import ProductScreen from "../src/views/ProductScreen"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Product/:id" element={<ProductScreen/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
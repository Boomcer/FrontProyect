import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import GridProductos from './components/CardProductApp.jsx'
import './index.css'
import CardProductApp from './components/CardProductApp.jsx'
import HomeScreen from './views/HomeScreen.jsx'

createRoot(document.getElementById('root')).render(
 
   <HomeScreen />,
)

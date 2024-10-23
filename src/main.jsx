import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import HomeScreen from './views/HomeScreen.jsx'

createRoot(document.getElementById('root')).render(
 
   <HomeScreen />
)

import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import LoginApp from './components/LoginApp'


createRoot(document.getElementById('root')).render(

   <div>
      <LoginApp />
      </div>
)

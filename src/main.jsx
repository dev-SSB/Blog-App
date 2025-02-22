import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from "react-router-dom";
import Context from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <Context>
    <HashRouter >
      <App />
    </HashRouter>
  </Context>
)
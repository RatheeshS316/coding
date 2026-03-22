import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import Call from './App.jsx'                  // import default Call;
import {App , Hello} from './App.jsx'         // import {App ,Hello};

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <>
    <h1>heyyy</h1>
    <Hello /><App/><Call />
    </>
  </StrictMode>,
)




import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'; 
import Home from './files/Home';



function App() {


  return (
    <div>



     
  <HashRouter>
<Routes>
<Route path='/' element={<Home />} />


</Routes>
  </HashRouter>
      

     
    </div>
  )
}

export default App

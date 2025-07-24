
import './App.css'
import Index from './routes/Index';
import Navbar from './Layouts/Navbar';
import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  

  return (
    <>
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Index/>}>
        <Route></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import{BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from './pages/Home';
import { Category } from './pages/Category';
import {Area} from './pages/Area'
import { Recipe } from './pages/Recipe';
import { NotFound } from './pages/NotFound';


function App() {
  return (
  <>
  <Router>
  <Header/>
    <main className="container content">
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/category/:name' element={<Category/>}/>
        <Route path='/area' element={<Area/>}/>
        <Route path='/meal/:id' element={<Recipe/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Routes>
    </main>
  <Footer/>
  </Router>
  </>
  )
}

export default App;

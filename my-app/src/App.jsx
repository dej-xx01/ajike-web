import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/mainlayout'
import Home from './components/home'
import About from './components/about'
import Links from './components/links'
import Contact from './components/contact'
import Book from './components/book'
function App() {

  return (
    <Routes>
      <Route path='/' element = {<MainLayout/>}>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/links' element = {<Links/>}/>
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/book' element = {<Book/>} />
      </Route>
    </Routes>
  )
}

export default App

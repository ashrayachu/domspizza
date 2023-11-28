import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Menu from './pages/Menu.jsx'




import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
  <div className="App">
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
     <Footer/>
    </Router>
  </div>
  )
}

export default App

import './App.css'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotels from './pages/hotels/Hotels'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
function App() {
  
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/hotels' element={<List/>}/>
          <Route path='/hotel/:id' element={<Hotels/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

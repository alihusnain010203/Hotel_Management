import './App.css'
import Home from './pages/home/Home'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './pages/login/Login.jsx';
import List from './pages/list/list';
import Single from './pages/single/Single';
import New from './pages/new/New'
import { productInputs, userInputs } from './components/Formsource';
import './components/style/Dark.scss'
import { useContext } from 'react';
import { DarkmodeContext } from './components/context/darkmodecontext.jsx';
import { AuthContext } from './components/context/AuthContext';
function App() {
const {darkmode}=useContext(DarkmodeContext)

const ProtectedRoute=({children})=>{
  const {user}=useContext(AuthContext)
  if(!user){
    return <Navigate to={"/login"}/>
  }
  else{
    return children
  }
}
  return (
    
    <div className={darkmode ? 'app dark':'app'}>

    <BrowserRouter>
<Routes>
<Route path='/login' element={<Login/>}/>
 <Route index path='/'  element={
 <ProtectedRoute><Home/></ProtectedRoute>
 } />
  
  
   <Route path='/:menu'>
<Route index element={<ProtectedRoute><List/></ProtectedRoute>}/>
<Route path=':userid' element={<ProtectedRoute><Single/></ProtectedRoute>}/>
<Route path='new' element={<New input={userInputs} title={"Add New User"}/>}/>
   </Route>
   <Route path='/products'>
<Route index element={<ProtectedRoute><List/></ProtectedRoute>}/>
<Route path=':productid' element={<ProtectedRoute><Single/></ProtectedRoute>}/>
<Route path='new' element={<ProtectedRoute><New input={productInputs} title={"Add New Product"}/></ProtectedRoute>}/>
   </Route>

</Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

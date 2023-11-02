import './sidebar.scss'
import { Link } from 'react-router-dom';
import { AccountBox, AirportShuttleOutlined, AlignHorizontalCenterOutlined, BorderAllOutlined, CategoryOutlined, DashboardCustomize, HealthAndSafety, Logout, Notifications, Person, PsychologyAlt, Settings } from '@mui/icons-material';
import { useContext } from 'react';
import { DarkmodeContext } from '../context/darkmodecontext';
const Sidebar = () => {
  const {dispatch}=useContext(DarkmodeContext)
  return (
    <div className='sidebar'>
     <div className='top'> <Link to='/'>
        <span className='logo'>RP Admin </span></Link></div>
        <hr />
        <div className='list'><ul>
          <p className="title">MAIN</p>
          <Link to='/'><li><DashboardCustomize/><span>Dashboard</span></li></Link>
            <p className="title">LINKS</p>
            <Link to='/user'><li><Person/><span>User</span></li></Link>
            
            <Link to='/products'><li><CategoryOutlined/><span>Products</span></li></Link>
            <li><BorderAllOutlined/><span>Orders</span></li>
            <li><AirportShuttleOutlined/><span>Delivery</span></li>
            <p className="title">USEFUL</p>
            <li><AlignHorizontalCenterOutlined/><span>Stat</span></li>
            <li><Notifications/><span>Notifications</span></li>
            <li><HealthAndSafety/><span>System Health</span></li>
            <p className="title">SERVICES</p>
            <li><PsychologyAlt/><span>Logs</span></li>
            <li><Settings/><span>Settings</span></li>
            <p className="title">USER</p>
            <li><AccountBox/><span>Profile</span></li>
            <li><Logout/><span>LogOut</span></li>
            </ul></div>
        <div className='bottom'>
          <div><p className="title">THEME</p></div>
          <div className="colorOption" onClick={()=>{dispatch({type:'DARK'})
          }}>
          </div>
          <div style={{backgroundColor:'white'}} className="colorOption" onClick={()=>{
            dispatch({type:'LIGHT'})
          }}>
          </div></div>
          
        
    </div>
  )
}

export default Sidebar
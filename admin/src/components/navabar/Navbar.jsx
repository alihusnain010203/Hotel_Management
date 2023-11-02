import { useContext } from 'react';
import './navbar.scss'
import {  ChatBubbleOutline, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListAltOutlined, NotificationsNoneOutlined, Search,} from '@mui/icons-material';
import { DarkmodeContext } from '../context/darkmodecontext';

const Navbar = () => {
  const {dispatch}=useContext(DarkmodeContext)
  return (
    <div className='Navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <Search/>
        </div>
        <div className="items">
          <div className="item">
          <LanguageOutlined/>English
          </div>
          <div className="item" onClick={()=>{dispatch({type:'TOGGLE'})}}>
          <DarkModeOutlined />
          </div>
          <div className="item">
          <FullscreenExitOutlined/>
          </div>
          <div className="item">
          <NotificationsNoneOutlined/>
          <div className="counter">1</div>
          </div>
          <div className="item">
          <ChatBubbleOutline/>
          <div className="counter">3</div>
          </div>
          <div className="item">
          <ListAltOutlined/>
          </div>
          <div className="item">
            <img src="logo.png" width={50} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
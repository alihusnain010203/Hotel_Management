import {CarRental,Flight, Home, Hotel, TaxiAlertOutlined,Room, CalendarMonth, Person2 } from '@mui/icons-material'
import './header.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useContext, useState } from 'react';
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom';
import { SearchComponent } from '../../context/SearchContext.jsx';
import {AuthContext} from '../../context/AuthContext.jsx'
// eslint-disable-next-line react/prop-types
const Header = ({type}) => {
  const navigate=useNavigate();
  const {user}=useContext(AuthContext)
  const [Destination,setDestination]=useState('');
const [openCalendar,setopenCalendar]=useState(false);
const [openOptions,setopenOptions]=useState(false);
  const [date,setDate]=useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ])

  const [option,setOption]=useState(
    {
      adult:1,
      children:0,
      room:1
    }
  )

  const hanleOption=(name,operation)=>{
setOption(
prev=>{
  return{
    ...prev ,[name]:operation=='i'?option[name] +1 : option [name] -1
  }
}
)
  }

  const {dispatch}=useContext(SearchComponent);
const handleSearch=()=>{
  dispatch({type:"NEW_SEARCH" ,payload:{city:Destination,dates:date,options:option}})
  Destination!=='' ? 
navigate('/hotels' ,{state:{Destination,date,option}}):
(
  alert("Please enter destination")
)
}
  return (
    <div className="header">
        <div className="headerList">
            <div className="headerListItem"><Hotel/><span>Stays</span></div>
            <div className="headerListItem"><Flight/><span>Flights</span></div>
            <div className="headerListItem"><CarRental/><span>Car rentals</span></div>
            <div className="headerListItem"><Home/><span>Attractions</span></div>
            <div className="headerListItem"><TaxiAlertOutlined/><span>Airport taxis</span></div>
        </div>
{ type!=='list' && type!=='hotel' && <><div className="content">
<h1 className="headerTitle" style={{textAlign:'center'}} >A lifetime of discounts ? its Genius</h1>
<p className="hraderDesc" style={{textAlign:'center'}}>Get rewarded for your travels - unlocking savings of 10% <br />
and more with a free ReservaPro account</p>
{!user&&<button className="headerbutton">
  Register/Login
</button>}
</div>
<div className="searchContainer">
<div className="searchInput">
  <div className="searchInputItem">
    <Room className='icon'/>
    <input className='hinput' type="text" onClick={()=>{
      setopenCalendar(false);
      setopenOptions(false)
    }}  onChange={(e)=>{
      setDestination(e.target.value);
      
    }} value={Destination} placeholder='where to go...' />
  </div>
  <div className="searchInputItem calendarComponent">
    <CalendarMonth  className='icon'/>
    <span onClick={()=>{
      setopenCalendar(!openCalendar);
    setopenOptions(false);
    }}>{`${format(date[0].startDate,'MM/dd/yyy' )} to ${format(date[0].endDate,'MM/dd/yyy' )}`}</span>
    
     {openCalendar &&
    <DateRange
    className='calendar'
    editableDateInputs={true}
        onChange={item=>setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        minDate={new Date()}
      />} 
  </div>
  <div className="searchInputItem options" >
    <Person2 className='icon'/>
    <span onClick={()=>{
    setopenOptions(!openOptions);
    setopenCalendar(false)
  }}>{`${option.adult} Adults ,${option.children} Children ${option.room} Room`}</span>
   {
    openOptions &&
    
   <div className="optionItems">
   <div className="optionitem">
      <span className="optionText">Adult</span>
      <div className="CouterContainer">
      <button className="OptionsButton" disabled={option.adult<=1} onClick={()=>{
        hanleOption('adult' ,'d')
      }}>-</button>
      <span className="OptionCounter">{option.adult}</span>
      <button className="OptionsButton" onClick={()=>{
        hanleOption('adult' ,'i')
      }}>+</button></div>
    </div>
    <div className="optionitem">
      <span className="optionText">Children</span>
      <div className="CouterContainer">
      <button className="OptionsButton" disabled={option.children<=0} onClick={()=>{
        hanleOption('children' ,'d')
      }}>-</button>
      <span className="OptionCounter" >{option.children}</span>
      <button className="OptionsButton" onClick={()=>{
        hanleOption('children' ,'i')
      }}>+</button></div>
    </div>
    <div className="optionitem">
      <span className="optionText">Room</span>
      <div className="CouterContainer">
      <button className="OptionsButton" disabled={option.room<=1}
      onClick={()=>{
        hanleOption('room' ,'d')
      }}>-</button>
      <span className="OptionCounter">{option.room}</span>
      <button
       className="OptionsButton" onClick={()=>{
        hanleOption('room' ,'i')
      }}>+</button></div>
    </div>
   </div>
   }
  </div>
  <div className="searchInputItem">
    <button className='Searchbutton' onClick={handleSearch}>Search</button>
  </div>
</div>
</div></>}
</div>

  )
}

export default Header

import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navabar/Navbar'
import { DriveFolderUpload  } from '@mui/icons-material'
import { useState } from 'react'
// eslint-disable-next-line react/prop-types
const New = ({input,title}) => {
const [inputImg,setInputImg]=useState('')

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
         <h1>
         {title}
         </h1>
        </div>
        <div className="bottom">
           <div className="left">
<img src={inputImg?URL.createObjectURL(inputImg):'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'} alt="" />
          </div>
          <div className="right">
<form>
<div className="formInput" >
    <label htmlFor='file'><DriveFolderUpload className='icon'/></label>
    <input type='file' id='file' onChange={(e)=>{
      setInputImg(e.target.files[0])
    }} style={{display:'none'}}/>
    </div>
  {
    // eslint-disable-next-line react/prop-types
    input.map((i)=>{
      return(

      <div className="formInput" key={i.id}>
    <label>{i.label}</label>
    <input type={i.type}  placeholder={i.placeholder}/>
  </div>)
    }
    )
  }
  

  <button className='btn' onClick={(e)=>{
    e.preventDefault();
  }} >Send</button>
</form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
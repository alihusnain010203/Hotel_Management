import {  ArrowBack, ArrowForward,Cancel, Room } from '@mui/icons-material'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './hotel.css'
import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchComponent } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext.jsx'
import Reserve from '../../components/reserve/Reserve'
const Hotels = () => {
   const data=useLocation().state.list;
   const id=useLocation().state.id;
const navigate=useNavigate();
  let [slider,setSlider]=useState(0);
  const [Openmodal,setOpenModal]=useState(false);
  const [OpenmodalReserve,setOpenModalReserve]=useState(false)
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const {dates , options}=useContext(SearchComponent);
  const days=(dayDifference(dates[0].endDate,dates[0].startDate));
  const {user}=useContext(AuthContext);
 const handleReserveNow=(e)=>{
user ? setOpenModalReserve(true) :navigate('/login')
 }
  return (
    <div className='hotel'>
      <Navbar/>
<Header type='hotel'/>
<div className="HotelContainer">

  <div className="hotelWrapper">
    <button className="BookNow" onClick={handleReserveNow}>Book Now</button>
    <h1 className="hotelTitle">
      {data.name}
    </h1>
    <div className="hotelAddress">
<Room/>
<span>{data.address}</span>
    </div>
    {Openmodal &&  <div className="slider">
  <p  onClick={()=>{
    if (slider>0) {
      setSlider(--slider);
    }
    else{
      setSlider(photos.length-1)
    }
    
  }} ><ArrowBack/></p>
  <p onClick={()=>{
    setOpenModal(false)
  }}><Cancel className='close' /></p>
  <div className="sliderWrapper">
    <img className='imgSlider' src={photos[slider].src} alt="" />
  </div>
 <p onClick={()=>{
    if (slider<(photos.length-1)) {
      setSlider(++slider);
    }
    else{
      setSlider(0)
    }
  }}><ArrowForward/></p>
    </div>
 }
    <span className="hotelDistance">
      {data.distance}
    </span>
    <span className="HotelPriceHighLight">
     { `Book a stay over $${data.cheapestPrice} at this property and get a free airport taxi`}
    </span>
    <div className="hotelimgs">
    {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>

                <img
                onClick={()=>{
                  setSlider(i);
                  setOpenModal(true);
                }}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}</div>
            
             <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian s Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>${days* data.cheapestPrice * options.rooms}</b> ({days} nights)
              </h2>
              <button style={{marginTop:'10px'}}>Reserve or Book Now!</button>
            </div>
          </div>
  </div>
 
</div>

<Footer/>

{OpenmodalReserve && <Reserve setOpenModalReserve={setOpenModalReserve} hotelId={id}/>}
    </div>
  )
}

export default Hotels
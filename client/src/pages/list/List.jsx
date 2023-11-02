import './list.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/SearchItem/SearchItem'
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react'
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'
// import { useFetch } from '../../Hooks/useFectch'
const List = () => {
 const state=useLocation().state;
const [destination,setDestination]=useState(state.Destination);
const [date,setDate]=useState(state.date);
const [option,setOption]=useState(state.option)
const [opendates,setopendates]=useState(false)
const [min,setmin]=useState();
const [max,setmax]=useState();
const handleSearch=()=>{
const val=document.querySelector('.lsinput').value;
setDestination(val);
}
// const {data,loading}=useFetch(`http://localhost:800/hotels/getbyCity?cities=${destination}`)
// let {list}=data;
// console.log(list);


// const [data, setdata] = useState([]);
// const [loading, setloading] = useState(true);
// const [err, seterr] = useState(false);
// const Url=`http://localhost:800/hotels/getbyCity?cities=${destination}&_limit=5`
// useEffect(() => {
//   const fetch = async () => {
//     try {
//       setloading(true);
//       const response = await axios.get(Url);
//       setdata(response.data.list);
//     // setdata(data.flat(1))
//     console.log(data);
//     } catch (error) {
//       seterr(error);
//     }
//     setloading(false);
//   };
//   fetch();
// },[]);
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const Url = `http://localhost:1800/hotels/getbyCity?cities=${destination}&min=${min || 10}&max=${max || 900}`;

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(Url);
      setData(response.data.list.flat(1));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
  }, [Url]);
  return (
    <div className="list">
<Navbar/>
<Header type='list'/>
<div className="listContainer">
  <div className="listWrapper">
    <div className="listSearch">
      <h1 className='lsTitle'>Search</h1>
      <div className="lsItem">
<label >Destination</label>
<input className='lsinput'  type="text" placeholder={destination} />
      </div>
      <div className="lsItem">
<label >Check In dates</label>
<div onClick={()=>{
  setopendates(!opendates)
}}className='date-holder'>{`${format(date[0].startDate,'MM/dd/yyy' )} to ${format(date[0].endDate,'MM/dd/yyy' )}`}</div>
<span>{
  opendates && <DateRange
  editableDateInputs={true}
      onChange={item=>setDate([item.selection])}
      ranges={date}
      minDate={new Date()}
      fixedHeight={true}
    />}</span>
      </div>
      <div className="lsItem">
<label >Options</label>
<div className="lsoptionItem">
  <span className="lsOptiontext">
    Min Price <small>per night</small>
  </span>
  <input value={min} onChange={(e)=>{
    setmin(e.target.value)
  }} type="number" />
</div>
<div className="lsoptionItem">
  <span className="lsOptiontext">
    Max Price <small>per night</small>
  </span>
  <input value={max} onChange={(e)=>{
    setmax(e.target.value)
  }} type="number" />
</div>
<div className="lsoptionItem">
  <span className="lsOptiontext">
    Adults
  </span>
  <input min={1} type="number" placeholder={option.adult} />
</div>
<div className="lsoptionItem">
  <span className="lsOptiontext">
    Children
  </span>
  <input min={0} type="number" placeholder={option.children}/>
</div>
<div className="lsoptionItem">
  <span className="lsOptiontext">
    Room</span>
  <input min={1} type="number" placeholder={option.room} />
</div>
      </div>
      <button className='searchbtn' onClick={handleSearch}>Search</button>
    </div>
    <div className="listResult">
       {
        loading?
        (<ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['blue', 'purple', 'gray', 'black', 'grey']}
        />)
        :(
         data.length>1
         &&
          data.map((list)=>{
            return(
           < SearchItem list={list} key={list._id}/>
           )
          })
        )
      } 
    </div>
   
  </div>
</div> <Footer/>
    </div>
  )
}

export default List
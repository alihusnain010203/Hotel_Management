import { Link } from 'react-router-dom'
import './searchitem.css'

const SearchItem = ({list}) => {
  return (
    <div className="searchItem" key={list._id}>
        <img src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=" className='siImg' alt="" />

        <div className="siDesc">
            <h1 className="siTitle">{list.name}</h1>
            <span className="siDistan">{list.distance}</span>
            <div className="TexiOp">Free Airport</div>
            <span className="siSubtile">
               {list.desc}
            </span>
            <span className='siFeatures'> Room Bathroom Bed</span>
<span className="siCancleop">
    free Cancelation
</span>
<span className="siCancleSubtitle">
    you can cancle late,so lock in this great price today
</span>
        </div>
        <div className="siDetails">
            
        <div className="searchRating">
            <span className="RatingCetagory">Excellent</span>
            <button className='siButtonrating'>{list.rating}</button>
        </div>
        <div className="siDeatilPrice">
            <span className='siPrice'>{`$${list.cheapestPrice}`}</span>
            <span className="siTaxOpt">Includes taxes and fees</span>
            <Link to={`/hotel/${list._id}`} name="Tower Street Appartment" state={{list:list,id:list._id}}><button className="sicheckbtn">See Availabilty</button></Link>
        </div>
        </div>

    </div>
  )
}

export default SearchItem
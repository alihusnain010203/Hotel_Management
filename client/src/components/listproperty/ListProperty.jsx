import { ColorRing } from 'react-loader-spinner';
import { useFetch } from '../../Hooks/useFectch'
import './listproperty.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const ListProperty = () => {


  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setloading(true);
        const response = await axios.get(
          "http://localhost:1800/hotels/getbyType?types=Restaurants,Cabins,Apartments,Hotels,Luxury,Offices,Resort"
        );
        setdata(response.data);
      } catch (error) {
        seterr(error);
      }
      setloading(false);
    };
    fetch();
  }, []);
  const types=["Restaurants","Cabins","Apartments","Hotels","Luxury","Offices","Resorts"]
  const Dataimg=["https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80","https://www.travelandleisure.com/thmb/W9KQ1wbavKQN6GyqyMxNEghgfF8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-gatlinburg-tennessee-CABINS0123-ac308b389b7b4526a3eb8f5703608f6f.jpg","https://media.istockphoto.com/id/488120139/photo/modern-real-estate.jpg?s=612x612&w=0&k=20&c=88jk1VLSoYboMmLUx173sHs_XrZ9pH21as8lC7WINQs=","https://static.independent.co.uk/2023/03/24/09/Best%20New%20York%20boutique%20hotels.jpg",
"https://secretsanfrancisco.com/wp-content/uploads/2023/05/1015-folsom-1024x683.jpg","https://s.abcnews.com/images/Business/office-prototype-rt-ps-200506_hpMain_16x9_1600.jpg","https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/03/04111335/amandari-indonesia-suite-exterior-and-pool_original_11588-2-1401x900.jpg"]
  return (
    <div className='list'>
        <div className="ListPropertyItems">
            {
              loading?(<ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['blue', 'purple', 'gray', 'black', 'grey']}
              />):
              (types.map((type,index)=>{

return (<div className="ListPropertyItem"><img className='ListImg' src={Dataimg[index]} alt="" /><h2>{type}</h2><h3>{data[index]} places</h3></div>)
              }))
            }
        </div>
    </div>
  )
}

export default ListProperty
import { ColorRing } from "react-loader-spinner";
import "./featureproperty.css";
import { useEffect, useState } from "react";
import axios from "axios";

const FeatureProperty = () => {
  // const {data,loading}=useFetch('http://localhost:800/hotels/getbyFeature');

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setloading(true);
        const response = await axios.get(
          "http://localhost:1800/hotels/getbyFeature"
        );
        setdata(response.data);
      } catch (error) {
        seterr(error);
      }
      setloading(false);
    };
   
    fetch();
  }, []);
const imgData=["https://cdn.sortiraparis.com/images/80/87521/474008-brasserie-le-choupinet.jpg",
"https://imgix.theurbanlist.com/content/article/society-1.png",
"https://media-cdn.tripadvisor.com/media/photo-s/16/3d/3d/c1/terrasse.jpg",
"https://media-cdn.tripadvisor.com/media/photo-s/18/90/18/73/dining-view.jpg",
"https://i.guim.co.uk/img/media/c8b1fe5aa29e93651090e899c756492daa312489/0_0_5245_3607/master/5245.jpg?width=700&quality=85&auto=format&fit=max&s=329ca2f34f630bc2e31973c9cd415913",
"https://images.resto.com/view?iid=resto.lu:d75a5ad7-f3b4-486d-bfba-e81be7bc97d5&context=default&width=1400&height=605&hash=6128bf46d19d6c913bb54ebd94fccc98",
"https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.webp?b=1&s=170667a&w=0&k=20&c=9cnDfc9tNIAcgvuGHZkST7CP-dFaNXutX8OpzVO1jEA="]
  return (

    <div className="featureproperty">
      <div className="featurepropertyItems">
    {
      loading ? (<ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['blue', 'purple', 'gray', 'black', 'grey']}
      />):(

        data.map((item,index) => (
          <div className="fpItem" key={data[index]._id}>
            <img
              src={imgData[index] ?? "https://cdn.sortiraparis.com/images/80/87521/474008-brasserie-le-choupinet.jpg"}
              alt=""
              className="fpImg"
            />
            <span className="fpName">{data[index].name}</span>
            <span className="fpCity">{data[index].city}</span>
            <br />
            <span className="fpPrice">Starting from ${data[index].cheapestPrice}</span>
            {data[index].rating && <div className="rating">
              <button className=".fpbutton">{data[index].rating}</button>
              <span>Excellent</span>
            </div>}
          </div>
        )
      )
      )
    }
      </div>
    </div>
  );
};

export default FeatureProperty;

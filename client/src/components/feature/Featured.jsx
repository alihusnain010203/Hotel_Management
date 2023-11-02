import { ColorRing } from "react-loader-spinner";
import "./featured.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useFetch } from "../../Hooks/useFectch";

const Featured = () => {


  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setloading(true);
        const response = await axios.get(
          "http://localhost:1800/hotels/getbyCity?cities=Dubai,New York,London,Sydney,Toronto"
        );
        setdata(response.data.number);
      } catch (error) {
        seterr(error);
      }
      setloading(false);
    };
    fetch();
  }, []);

  const NameData = ["Dubai", "New York", "London", "Sydney", "Toronto"];
  const imgData = [
    "https://cdn.britannica.com/69/156369-050-75E7FD08/skyline-Dubai-United-Arab-Emirates.jpg",
    "https://www.nationsonline.org/gallery/USA/Times-Square-New-York.jpg",
    "https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/800px-Sydney_Opera_House_-_Dec_2008.jpg",
    "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/516000/516652-nathan-phillips-square.jpg",
  ];
  return (
    <div className="featured">
      {loading ? (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["blue", "purple", "gray", "black", "grey"]}
        />
      ) : (
        
          <div className="featuredItems">
            {data.map((num, index) => {
              return (
                <div className="featureItem" key={index}>
                  <img className="feature_img" src={imgData[index]} alt="" />
                  <div className="featureTitles">
                    <h1>{NameData[index]}</h1>
                    <h2>{num} Properties</h2>
                  </div>
                </div>
              );
            })}
          </div>
       
      )}
    </div>
  );
};

export default Featured;

import { KeyboardArrowUp, MonetizationOnOutlined, PersonOutline, ShoppingCartOutlined, WalletOutlined } from "@mui/icons-material";
import "./widgets.scss";

// eslint-disable-next-line react/prop-types
const Widgets = ({type}) => {
  let data;

  // Temporary
  let amount=100;
  let diff=20;


  switch (type) {
    case 'USERS':
      data={
        title:type,
        isMoney:false,
        link:"see all users",
        icon:<PersonOutline style={{color:'crimson'}}/>
      }
      break;
      case 'ORDERS':
      data={
        title:type,
        isMoney:false,
        link:"see all orders",
        icon:<ShoppingCartOutlined style={{color:'yellowgreen'}}/>
      }
      break;
      case 'EARNINGS':
      data={
        title:type,
        isMoney:true,
        link:"net earnings",
        icon:<MonetizationOnOutlined style={{color:'darkblue'}}/>
      }
      break;
      case 'BALANCE':
      data={
        title:type,
        isMoney:true,
        link:"view details",
        icon:<WalletOutlined style={{color:'orange'}}/>
      }
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && '$'}{amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUp/>
          {diff}%
        </div>
        <div className="personiscon">
          {data.icon}
        </div>
      </div>
    </div>
  );
};

export default Widgets;

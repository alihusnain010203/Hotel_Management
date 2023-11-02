import "./home.scss"
import Sidebar from "../../components/sidebar/sidebar"
import Navbar from '../../components/navabar/Navbar';
import Widgets from "../../components/widgets/widgets";
import Featured from "../../components/featured/Featured";
import Chart from '../../components/chart/Chart'
import Table from "../../components/table/table";
const Home = () => {
  return (
    <div className="home">
        <Sidebar/> 
        <div className="homeContainer">
        <Navbar/>
       <div className="widgets">
<Widgets type='USERS'/>
<Widgets type='ORDERS'/>
<Widgets type='EARNINGS'/>
<Widgets type='BALANCE'/>
       </div>
       <div className="charts">
        <Featured/>
        <Chart/>
       </div>
       <div className="listContainer">
        <div className="titleContainer">Latest Transaction</div>
<Table/>
       </div>
        </div>
    </div>
  )
}

export default Home
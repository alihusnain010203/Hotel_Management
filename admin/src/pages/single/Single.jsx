import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navabar/Navbar'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/table'
const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
      <div className="top">
        <div className="left">
          <div className="editbtn">Edit</div>
         <h1 className="title">Information</h1>
         <div className="item">
          <img src="https://t3.ftcdn.net/jpg/05/90/59/34/360_F_590593473_dl4OpV0IoUzhUEEpqq98KPHhzUR9iqop.jpg" alt="" className="itemImg" />
          <div className="details">
<h1 className="itemTitle">John Doe</h1>
<div className="detailItem">
  <span className="itemkey">Email:</span>
  <span className="itemval">Johndoe@gmail.com</span>
</div>
<div className="detailItem">
  <span className="itemkey">Phone:</span>
  <span className="itemval">+1 2345 6789</span>
</div>
<div className="detailItem">
  <span className="itemkey">Address:</span>
  <span className="itemval">Lahore.pk</span>
</div>
<div className="detailItem">
  <span className="itemkey">Country:</span>
  <span className="itemval">Pakistan</span>
</div>
          </div>
         </div>
        </div>
        <div className="right">
          <Chart aspect={3/1} title='User 6 Month Revenue'/>
        </div>
      </div>
      <div className="bottom">
        <Table/>
      </div>
      </div>
    </div>
  )
}

export default Single
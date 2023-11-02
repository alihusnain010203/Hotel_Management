import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, MoreVert } from '@mui/icons-material'
import './featured.scss'
import { CircularProgress } from '@mui/joy'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'>Total Revenue</h1>
        <MoreVert fontSize='10px'/>
       
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <div><CircularProgress sx={{ '--CircularProgress-size': '140px'}} determinate value={66.67}>
        78%
      </CircularProgress></div>
        
      <p className="title">total sales made toady</p>
      <p className="amount">$420</p>
      <p className="discription">
        previous transaction in processing.Last payments not included.
      </p>
      <div className="summary">
        <div className="items">
          <div className="itemtitle">Target</div>
          <div className="itemResult negative">
            <KeyboardArrowDownOutlined/>
            <span className="itemAmount">$120k</span>
          </div>
        </div>
     

        <div className="items">
          <div className="itemtitle" >Last Week</div>
          <div className="itemResult positive">
            <KeyboardArrowUpOutlined/>
            <span className="itemAmount">$120k</span>
          </div>
        </div>
  
      
        <div className="items">
          <div className="itemtitle">Last Month</div>
          <div className="itemResult positive"> 
            <KeyboardArrowUpOutlined/>
            <div className="itemAmount">$120k</div>
          </div>
        
      </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
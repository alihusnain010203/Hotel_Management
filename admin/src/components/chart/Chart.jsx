import './chart.scss'
import { AreaChart,Area,
  ResponsiveContainer, XAxis, CartesianGrid, Tooltip,} from 'recharts';
const data = [
  {name:'January' ,Total:'900'},
  {name:'February' ,Total:'500'},
  {name:'March' ,Total:'600'},
  {name:'April' ,Total:'450'},
  {name:'May' ,Total:'600'},
  {name:'June' ,Total:'500'}
];

// eslint-disable-next-line react/prop-types
const Chart = ({aspect=3/1.5,title='Last 6 Month(Revenue)'}) => {
  return (

    <div className='chart'>
      <div className="title">{title}</div>
      <ResponsiveContainer width='100%' aspect={aspect}>
   <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#6439ff" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#6439ff" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke='gray' />
  <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
  
</AreaChart></ResponsiveContainer>
    </div>
  )
}

export default Chart
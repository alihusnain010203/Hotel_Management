import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { Link ,useParams } from 'react-router-dom';
import {userRows ,userColumns} from '../datatablesource';
import { useState } from 'react';

const Datatable = () => {
  const [data,setdata]=useState(userRows)
  const handleDelete=(id)=>{
setdata(data.filter((item)=>{
  return(
item.id!==id
)
}))
  }
  let {menu}=useParams();
if (menu=='user') {
   menu='user';
} else {
  menu='products';
}
  const actionColum=[
    {field:'action' , headerName:'Actions',width:'200' ,renderCell:(params)=>{
      return(
<div className="cellAction">
  <Link to={`/${menu}/test` } ><div className="btn view">View</div></Link>
  <div className="btn del" onClick={()=>{
    handleDelete(params.row.id)
  }}>Delete</div>
</div>)
    }}
  ]
  return (
    <div className='datatable'>
      <div className="DatatableTitle">
        Add new {menu}
        <div><Link to={`/${menu}/new`}className='link'>Add new</Link></div>
        
      </div>
         <DataGrid
        rows={data}
        columns={userColumns.concat(actionColum)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[9, 1]}
        
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
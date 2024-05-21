import React from 'react'
import "./dataTable.scss"
import view from "../../assests/view.svg"
import del from "../../assests/delete.svg"

import { DataGrid, GridToolbar, } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const DataTable = (props) => {


  const handleDelete = (id) => {
    console.log(id)
  };
  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src={view} alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src={del} alt="" />
          </div>
        </div>
      );
    },
  };



  return (
    <div className='dataTable'>
      <DataGrid
        className='dataGrid'
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable

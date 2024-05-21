import React, { useEffect } from 'react'
import "./users.scss"
import DataTable from '../../components/dataTable/DataTable'
import { usersColumns } from '../../utils/ConfigTableFields'
import { userRows } from '../../utils/ConfigTableData'

const Users = () => {

  const fetchUser = async () => {
    //Dummy Api call
    // const res = await fetch("https://api.restful-api.dev/objects");
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data)
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button>Add Users</button>
      </div>
      <DataTable slug="users" columns={usersColumns} rows={userRows} />
    </div>
  )
}

export default Users

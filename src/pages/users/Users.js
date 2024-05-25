import React, { useEffect, useState } from 'react'
import "./users.scss"
import DataTable from '../../components/dataTable/DataTable'
import { usersColumns } from '../../utils/ConfigTableFields'
import { userRows } from '../../utils/ConfigTableData'
import Add from '../../components/add/Add'

const Users = () => {

  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  // const userData = users?.map((user)=>user.email)


  const fetchUser = async () => {
    //Dummy Api call
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    setUsers(data.users);

    // console.table(data)
  }
  console.log(users)

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add Users</button>
      </div>


      
      <DataTable slug="users" columns={usersColumns} rows={users} />
      {open && <Add slug="users" columns={usersColumns} setOpen={setOpen} />}
    </div>
  )
}

export default Users

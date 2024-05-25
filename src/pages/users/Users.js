import React, { useEffect, useState } from 'react'
import "./users.scss"
import DataTable from '../../components/dataTable/DataTable'
import { usersColumns } from '../../utils/ConfigTableFields'
import { userRows } from '../../utils/ConfigTableData'

const Users = () => {

  const [users, setUsers] = useState([]);

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
        <button>Add Users</button>
      </div>

      {users?.map((user) => (
        <div>


        </div>
      ))}
      <DataTable slug="users" columns={usersColumns} rows={users} />
      {/* <DataTable slug="users" columns={usersColumns} rows={userRows} /> */}
    </div>
  )
}

export default Users

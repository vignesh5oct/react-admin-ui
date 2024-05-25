import React, { useEffect, useState } from 'react'
import "./products.scss"
import DataTable from '../../components/dataTable/DataTable';
import { productsColumns, usersColumns } from '../../utils/ConfigTableFields';
import Add from '../../components/add/Add';

const Products = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);


  const fetchUser = async () => {
    //Dummy Api call
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setUsers(data.products);

    // console.table(data)
  }
  console.log(users)

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className='products'>
      <div className='info'>
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add Products</button>
      </div>

      <DataTable slug="products" columns={productsColumns} rows={users} />
      {open && <Add slug="products" columns={productsColumns} setOpen={setOpen} />}
    </div>
  )
}

export default Products

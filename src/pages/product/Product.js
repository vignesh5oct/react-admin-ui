import { useEffect, useState } from "react";
import Single from "../../components/single/Single"

import "./product.scss"
import { singleProduct } from "../../data";

const Product = (id) => {

  const [users, setUsers] = useState([]);


  //Fetch data and send to Single Component
  const fetchUser = async () => {
    //Dummy Api call
    const res = await fetch("https://dummyjson.com/products/" + id);
    const data = await res.json();
    setUsers(data);

    console.log(id)
    // console.table(data)
  }
  console.log(users)

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="product">
      <Single {...singleProduct} />
      {id}
    </div>
  )
}

export default Product
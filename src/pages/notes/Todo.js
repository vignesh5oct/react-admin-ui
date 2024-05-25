import React, { useEffect, useRef, useState } from 'react'
import "./todo.scss"

const Todo = () => {

  const searchText = useRef(null);

  const [list, setList] = useState([]);
  // const [inputValue, setInputValue] = useState('');

  const handle = () => {
    // console.log(inputValue)
    // setList([...list, inputValue])
    console.log(searchText.current.value)
    setList([...list, searchText.current.value])
  }

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);

  };
  

  useEffect(() => {
    console.log("Component rendered successfully");
  }, []);
  return (
    <div className='todo'>
      <div className='input'>
        {/* <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" /> */}
        <input ref={searchText} type="text" />
        <button onClick={handle}>Add</button>
      </div>
      <ul>
        {
          list.map((item, index) => (
            <>
              <li>{item}</li>
              <button onClick={() => handleDelete(index)}>del</button>
            </>

          ))
        }
      </ul>
    </div>
   


  )
}

export default Todo

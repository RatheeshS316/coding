import {useState , useEffect} from 'react'

const List = ({getItems}) => {

  const [items ,setItems]=useState([]);

  useEffect(()=>{
    setItems(getItems(10));
  },[getItems]);
  return (
    <div>
      {
        items.map((item, index) => (
          <div key={index}>{item}</div>
        ))
      }
    </div>
  )
}

export default List;

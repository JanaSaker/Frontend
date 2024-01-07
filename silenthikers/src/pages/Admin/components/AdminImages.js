import axios from 'axios';
import Loader from '../../../components/loader/Loader'
import React, { useEffect, useState } from 'react';


const AdminImages = () => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");


  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/images')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (item) => {
    try{
    const response = await axios.delete(`http://localhost:5000/images/${item.id}`)
    setData((prevItems) => prevItems.filter((i) => i.id !== item.id));
    setMessage('Deleted successfully')
    console.log(response)
    }catch(err){
      console.log(err)
      setMessage('Failed to delete')
    }
  }

  return (
    <div className='d-flex m-5 gap-5' style={{ overflow: 'auto', maxHeight: '740px' }}> 
      {data.map((item,index) => (
        <div key={index} className='w-100 h-100' >
          <div>
          <img className='w-100 h-50' src={`http://localhost:5000/${item.image}`} alt={index}/>
          <button className='btn btn-danger w-100 fa fa-trash' onClick={() => handleDelete(item)}></button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AdminImages
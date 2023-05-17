import React, {useState} from 'react';
import axios from 'axios';

import '../Styles/form.css'

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    quantity: 0,
    description: ''
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/create', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  return (
    <>
        <div className='body'>
            <h1 className='text-center'>Admin Dashboard</h1>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Name:</span><br/>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </label><br/>
              <label>
                <span>Price:</span><br/>
                <input type="number" name="price" value={formData.price} onChange={handleChange} />
              </label><br/>
              <label>
               <span>Quantity:</span><br/>
               <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
              </label><br/>
              <label>
                <span>Description:</span><br/>
                <input type="text" name="description" value={formData.description} onChange={handleChange} />
              </label><br/>
              <button id="button" type="submit">Add Product</button>
            </form>

        </div>
    </>
  )
}

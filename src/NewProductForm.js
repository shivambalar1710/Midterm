import React, { useState } from 'react';

function NewProductForm() {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
    photo: null,
    
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProductData({
      ...productData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', productData);
    // Clear the form data
    setProductData({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
      photo: null,
    });
  };
  

  const handleCancel = () => {
    console.log('Form cancelled');
    // Clear the form data
    setProductData({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
      photo: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Product</h2>
      
      <div>
        <input 
          type="file" 
          id="photo" 
          name="photo"
          accept="image/*"
          onChange={handleChange}
          style={{ display: 'none' }}
          required
        />
        <label htmlFor="photo">Upload Photo</label>
        <button type="button" onClick={() => document.getElementById('photo').click()}>
          Upload <span role="img" aria-label="upload"required>⬆️</span>
        </button>
      </div>
      
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          value={productData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="description">Description:</label>
        <textarea 
          id="description" 
          name="description"
          value={productData.description}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="category">Category:</label>
        <input 
          type="text" 
          id="category" 
          name="category"
          value={productData.category}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input 
          type="number" 
          id="quantity" 
          name="quantity"
          value={productData.quantity}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="price">Price:</label>
        <input 
          type="number" 
          step="0.01"
          id="price" 
          name="price"
          value={productData.price}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit">Submit</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
}

export default NewProductForm;

import React, { useState } from 'react';
import NewProductForm from './NewProductForm';

function NewShopForm() {
  const [shopData, setShopData] = useState({
    name: '',
    description: '',
    logo: null,
  });

  const [currentPage, setCurrentPage] = useState('new-shop');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setShopData({
      ...shopData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!shopData.name) {
      alert('Name is required');
      return;
    }
    if (!shopData.description) {
      alert('Description is required');
      return;
    }
    if (!shopData.logo) {
      alert('Logo is required');
      return;
    }
  
    console.log('Form submitted:', shopData);
    setShopData({
      name: '',
      description: '',
      logo: null,
    });
  };
  
  

  const handleCancel = () => {
    console.log('Form cancelled');
    // Clear the form data
    setShopData({
      name: '',
      description: '',
      logo: null,
    });
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => handleNavClick('new-shop')}>New Shop</a>
          </li>
          <li>
            <a href="#" onClick={() => handleNavClick('new-product')}>New Product</a>
          </li>
        </ul>
      </nav>

      {currentPage === 'new-shop' ? (
        <form onSubmit={handleSubmit}>
          
          <h2>New Shop</h2>
        
        <div>
          <input 
            type="file" 
            id="logo" 
            name="logo"
            accept="image/*"
            onChange={handleChange}
            style={{ display: 'none' }}
            required
          />
          <label htmlFor="logo">Upload Logo</label>
          <button type="button" onClick={() => document.getElementById('logo').click()}>
            Upload <span role="img" aria-label="upload">⬆️</span>
          </button>
        </div>
        
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={shopData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="description">Description:</label>
          <textarea 
            id="description" 
            name="description"
            value={shopData.description}
            onChange={handleChange}
            required
          />
        </div>

          
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      ) : (
        <NewProductForm />
      )}
    </div>
  );
}

export default NewShopForm;

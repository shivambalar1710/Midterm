import React, { useState } from 'react';

function NewShopForm() {
  const [shopData, setShopData] = useState({
    name: '',
    description: '',
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setShopData({
      ...shopData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', shopData);

    const formData = new FormData();
    formData.append('name', shopData.name);
    formData.append('description', shopData.description);
    formData.append('logo', shopData.logo);

    try {
      const response = await fetch('http://example.com/api/shops', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('Submission successful:', data);
    } catch (error) {
      console.error('Submission failed:', error);
    }
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

  return (
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
  );
}

export default NewShopForm;

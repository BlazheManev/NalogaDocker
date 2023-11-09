import React, { useState } from 'react';

const CarForm: React.FC = () => {
  const [newCar, setNewCar] = useState({
    carBrend: '',
    carModel: '',
    manufacturingYear: '',
    color: '',
    isAutomatic: false,
    price: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCar({ ...newCar, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      console.log(newCar)
    // Send a POST request to localhost:3000/cars
    fetch('http://localhost:3000/cars/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCar),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response, e.g., show a success message
        alert('Car added successfully');
      })
      .catch((error) => {
        // Handle errors
        console.error('Error:', error);
      });

    // Reset the form
    setNewCar({
      carBrend: '',
      carModel: '',
      manufacturingYear: '',
      color: '',
      isAutomatic: false,
      price: 0,
    });
  };

  return (
    <div className="car-form">
      <h2>Add a New Car</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Brand:</label>
          <input type="text" name="carBrend" value={newCar.carBrend} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Model:</label>
          <input type="text" name="carModel" value={newCar.carModel} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Manufacturing Year:</label>
          <input type="date" name="manufacturingYear" value={newCar.manufacturingYear} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Color:</label>
          <input type="text" name="color" value={newCar.color} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Automatic Transmission:</label>
          <select name="isAutomatic" value={newCar.isAutomatic.toString()} onChange={handleInputChange} required>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={newCar.price} onChange={handleInputChange} required />
        </div>
        <div>
          <button type="submit">Add Car</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;

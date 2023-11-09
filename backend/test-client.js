const axios = require('axios');

const API_URL = 'http://localhost:3000/cars'; // Update the URL as needed

// Function to perform a GET request to fetch all cars
async function getAllCars() {
  try {
    const response = await axios.get(API_URL);
    console.log('GET All Cars:', response.data);
  } catch (error) {
    console.error('Error fetching all cars:', error.message);
  }
}

// Function to perform a GET request to fetch a car by ID
async function getCarById(id) {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    console.log('GET Car by ID:', response.data);
  } catch (error) {
    console.error('Error fetching car by ID:', error.message);
  }
}

// Function to perform a POST request to create a new car
async function createCar(newCar) {
  try {
    const response = await axios.post(API_URL, newCar);
    console.log('Create Car:', response.data);
  } catch (error) {
    console.error('Error creating a car:', error.message);
  }
}

// Function to perform a PUT request to update a car by ID
async function updateCar(id, updatedCar) {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedCar);
    console.log('Update Car:', response.data);
  } catch (error) {
    console.error('Error updating car:', error.message);
  }
}

// Function to perform a DELETE request to delete a car by ID
async function deleteCar(id) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    console.log('Delete Car:', response.data);
  } catch (error) {
    console.error('Error deleting car:', error.message);
  }
}

// Usage examples
getAllCars();
getCarById('654661b1b9a653e92dd80142'); // Replace with an actual car ID
createCar({
  carBrand: 'Toyota',
  carModel: 'Camry',
  manufacturingYear: '2023-01-01',
  color: 'Silver',
  isAutomatic: true,
  price: 28000,
});
updateCar('654661b1b9a653e92dd80142', { price: 30000 }); // Replace with an actual car ID
deleteCar('65466fb8b772aac2b8f88e40'); // Replace with an actual car ID
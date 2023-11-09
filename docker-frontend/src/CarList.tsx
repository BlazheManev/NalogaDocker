import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Car from './interfaces/Car';
import './style/CarList.css';
import 'bootstrap/dist/css/bootstrap.css';

const CarList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response: AxiosResponse<Car[]> = await axios.get('http://localhost:3000/cars/');
        const carsWithDate = response.data.map((car) => ({
          ...car,
          manufacturingYear: new Date(car.manufacturingYear),
        }));
        setCars(carsWithDate);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    }

    fetchCars();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/cars/${id}`);
      setCars((prevCars) => prevCars.filter((car) => car._id !== id));
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  const handleUpdate = (car: Car) => {
    setSelectedCar(car);
  };

  const handleUpdateSubmit = async (updatedCar: Car) => {
    try {
      await axios.put(`http://localhost:3000/cars/${updatedCar._id}`, updatedCar);
      setCars((prevCars) =>
        prevCars.map((car) => (car._id === updatedCar._id ? updatedCar : car))
      );
      setSelectedCar(null);
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  return (
    <div className="car-list">
      <h2>Car List</h2>
      <ul>
        {cars.map((car) => (
          <li key={car._id} className="car-item">
            <div className="car-info">
              <strong>Brand:</strong> {car.carBrend}
            </div>
            <div className="car-info">
              <strong>Model:</strong> {car.carModel}
            </div>
            <div className="car-info">
              <strong>Year:</strong> {car.manufacturingYear.toLocaleDateString()}
            </div>
            <div className="car-info">
              <strong>Color:</strong> {car.color}
            </div>
            <div className="car-info">
              <strong>Automatic:</strong> {car.isAutomatic ? 'Yes' : 'No'}
            </div>
            <div className="car-info">
              <strong>Price:</strong> ${car.price}
            </div>
            <div className="car-actions">
              <button
                onClick={() => handleDelete(car._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdate(car)}
                className="btn btn-warning"
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedCar && (
        <div className="update-car-modal">
          <h3>Edit Car Information</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateSubmit(selectedCar);
            }}
          >
            <div className="form-group">
              <label htmlFor="carBrend">Brand:</label>
              <input
                type="text"
                id="carBrend"
                name="carBrend"
                value={selectedCar.carBrend}
                onChange={(e) =>
                  setSelectedCar({ ...selectedCar, carBrend: e.target.value })
                }
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="carModel">Model:</label>
              <input
                type="text"
                id="carModel"
                name="carModel"
                value={selectedCar.carModel}
                onChange={(e) =>
                  setSelectedCar({ ...selectedCar, carModel: e.target.value })
                }
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="manufacturingYear">Year:</label>
              <input
                type="date"
                id="manufacturingYear"
                name="manufacturingYear"
                value={selectedCar.manufacturingYear.toISOString().split('T')[0]}
                onChange={(e) =>
                  setSelectedCar({
                    ...selectedCar,
                    manufacturingYear: new Date(e.target.value),
                  })
                }
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="color">Color:</label>
              <input
                type="text"
                id="color"
                name="color"
                value={selectedCar.color}
                onChange={(e) =>
                  setSelectedCar({ ...selectedCar, color: e.target.value })
                }
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="isAutomatic">Automatic:</label>
              <select
                id="isAutomatic"
                name="isAutomatic"
                value={selectedCar.isAutomatic ? 'true' : 'false'}
                onChange={(e) =>
                  setSelectedCar({ ...selectedCar, isAutomatic: e.target.value === 'true' })
                }
                className="form-control"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={selectedCar.price}
                onChange={(e) =>
                  setSelectedCar({ ...selectedCar, price: Number(e.target.value) })
                }
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
            <button
              onClick={() => setSelectedCar(null)}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CarList;

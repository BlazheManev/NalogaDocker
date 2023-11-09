# Car Management Application

This is a simple car management application that allows users to add, update, and delete cars. The application consists of two parts: a backend API developed with Express (TypeScript) and a frontend UI built with React (TypeScript). The backend is powered by a MongoDB database running in a Docker container. The application provides CRUD (Create, Read, Update, Delete) operations for managing car records.

## Getting Started

Before running the application, make sure you have [Docker](https://www.docker.com/get-started) and [Node.js](https://nodejs.org/) installed on your machine.

### Running the Backend

1. Navigate to the `backend` directory:
cd backend
1.docker build -t blazhe/express-sua:v2  . 

2.docker build -t blazhe/baza-sua:v1 bazaDocker. 

3. docker-compose up --build
You can also find the images here https://hub.docker.com/repositories/blazhe

or without the docker npm start



### Running the Frontend
Navigate to the frontend directory:


cd frontend
Install the frontend dependencies:

npm install
Start the React development server:


npm start
The frontend UI will be accessible at http://localhost:3001.

API Documentation
This application comes with a Swagger documentation for the API. You can access the API documentation at http://localhost:3000/api-docs after starting the backend server.

Usage
Visit the frontend application to view the list of cars, add new cars, update existing cars, and delete cars.
The API supports CRUD operations for cars and can be accessed directly or through the frontend.

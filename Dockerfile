# Use an official Node.js image with a specified version.
FROM node:18.12.1

# Create a directory for your application inside the container.
WORKDIR /app

# Copy your application files to the container.
COPY . .

# Install application dependencies.
RUN npm install

# Expose the port that your Express server will listen on.
EXPOSE 3000

# Define environment variables, if needed.

# Command to start your Node.js application.
CMD ["node", "index.js"]

# Node.js Dockerfile for Frontend/Catalog/Order Service
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port each service will run on (can be different for each service)
EXPOSE 8080  # Change this for other services

# Start the server
CMD ["npm", "start"]

# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./


# Install Node.js dependencies
RUN npm install

COPY . .
# Copy the rest of the application code to the working directory


# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["node", "server.js"]

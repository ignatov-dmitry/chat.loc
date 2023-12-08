# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY /var/www/node_chat/package*.json ./

# Install app dependencies
RUN npm install

# Bundle your app source
COPY /var/www/node_chat .

# Expose the port on which your app will run
EXPOSE 3000

# Define the command to run your app
CMD ["node", "app.js"]
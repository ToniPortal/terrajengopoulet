# Use an official Node.js runtime as a base image
FROM node:20

LABEL authors="ToniPortal"

WORKDIR /app

COPY . .

COPY package*.json ./

# Install dependencies
RUN npm install

# Specify the command to run on container start
CMD ["npm", "run","dev"]

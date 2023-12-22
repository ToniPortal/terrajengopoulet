# Use an official Node.js runtime as a base image
FROM node:20

LABEL authors="ToniPortal"

COPY . .

# Install dependencies
RUN npm install

# Specify the command to run on container start
CMD ["node", "server.js"]

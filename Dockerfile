# Stage 1: Build the Angular app
FROM node:20.13.1-alpine3.20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

# Build the Angular application in production mode
RUN ng build task-list --configuration="production"

# Stage 2: Serve the app with Nginx (Final Image)
FROM nginx:alpine

# Copy the built Angular app from the build stage
COPY --from=build /app/dist/task-list/browser /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]


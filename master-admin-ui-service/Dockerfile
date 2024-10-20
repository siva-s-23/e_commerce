# Stage 1: Build the app
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Final production image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --production

# Set environment variable for production
ENV NODE_ENV=production

# Expose port 3000 for the app
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]

# Stage 1: Build the app
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json for dependency installation
COPY package*.json ./

# Set build-time argument for Google OAuth client ID
ARG GOOGLE_AUTH_CLIENT_ID

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Set the environment variable for Google Auth during build
ENV NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID=$GOOGLE_AUTH_CLIENT_ID

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
ENV NODE_ENV production

# Expose port 3000 for the app
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]

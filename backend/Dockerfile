FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files first (for caching)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY src ./src

# Expose backend port
EXPOSE 5000

# Start server
CMD ["node", "src/index.js"]

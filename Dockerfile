# 1. Use Node.js base image
FROM node:20-alpine AS build

# 2. Set working directory
WORKDIR /app

# 3. Copy dependency files first (for caching)
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./

# 4. Install dependencies
RUN npm ci

# 5. Copy all remaining project files
COPY . .

# 6. Build your app (adjust command if your build step is different)
RUN npm run build

# 7. Start a new, smaller image for running the app
FROM node:20-alpine
WORKDIR /app

# 8. Copy built output from the previous image
COPY --from=build /app/dist ./dist
COPY package*.json ./

# 9. Install only production dependencies
RUN npm ci --omit=dev

# 10. Expose port and run your server
EXPOSE 3000
CMD ["node", "dist/server/index.js"]

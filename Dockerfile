# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy Prisma schema and generate Prisma Client
COPY prisma ./prisma
RUN npx prisma generate

# Copy application code
COPY . .

# Set environment variables
ENV NODE_ENV=production

# Expose the application port
EXPOSE 3000

# Command to run the app
CMD ["yarn", "start"]

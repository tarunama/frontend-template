# Use Bun official image for building and running the app
FROM oven/bun:1 AS base
WORKDIR /app
COPY package.json .
RUN bun install
COPY . .

# Development image
FROM base AS dev
EXPOSE 3000
CMD ["bun", "run", "dev"]

# Production image
FROM base AS prod
RUN bun run build
EXPOSE 3000
CMD ["bun", "run", "start"]

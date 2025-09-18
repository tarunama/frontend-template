# frontend-template

This project is a starting point for Next.js applications.

## Scripts

- `bun run dev` – start the development server
- `bun run build` – create a production build
- `bun run start` – run the production server
- `bun run test` – run tests (none provided)

## Docker (Bun)

Build a development container:

```sh
docker build --target dev -t frontend-dev .
docker run --rm -p 3000:3000 frontend-dev
```

Build a production container:

```sh
docker build --target prod -t frontend-prod .
docker run --rm -p 3000:3000 frontend-prod
```

## Docker Compose

Build and run using Docker Compose:

```sh
docker compose up dev
```

Run the production container:

```sh
docker compose up prod
```

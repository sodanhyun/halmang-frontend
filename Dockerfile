FROM node AS build

WORKDIR /app

COPY . .

RUN corepack enable

RUN pnpm install
RUN pnpm run build

EXPOSE 3000 

CMD ["pnpm", "dev", "--host"]
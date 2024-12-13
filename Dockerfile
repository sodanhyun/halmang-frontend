FROM krmp-d2hub-idock.9rum.cc/goorm/node:18

WORKDIR /app

COPY . .

RUN corepack enable

RUN pnpm install
RUN pnpm run build

EXPOSE 3000 

CMD ["pnpm", "preview"]
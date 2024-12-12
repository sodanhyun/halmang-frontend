FROM krmp-d2hub-idock.9rum.cc/goorm/node:18 AS build

WORKDIR /usr/src/app

COPY krampoline/ ./

RUN corepack enable

RUN pnpm install

RUN pnpm run build

RUN npm install -g serve

EXPOSE 3000 

RUN pnpm serve build
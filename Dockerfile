FROM krmp-d2hub-idock.9rum.cc/goorm/node:18 AS build

WORKDIR /usr/src/app

COPY krampoline/ ./

RUN corepack enable

RUN pnpm install

RUN pnpm run build

RUN npm install -g serve

EXPOSE 3000 

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist ./dist

RUN chown -R www-data:www-data /var/www/html/dist

EXPOSE 443 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

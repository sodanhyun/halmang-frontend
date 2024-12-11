FROM node AS build

WORKDIR /app

COPY . .

RUN corepack enable

RUN pnpm install
RUN pnpm run build

FROM nginx:1.25

WORKDIR /var/www/html

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist ./dist

RUN chown -R www-data:www-data /var/www/html/dist

EXPOSE 443 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
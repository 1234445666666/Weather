# Стадия сборки
FROM node:22-alpine as builder

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build

# Стадия запуска
FROM busybox

WORKDIR /app
COPY --from=builder /app/dist .

CMD ["httpd", "-f", "-p", "80"]

EXPOSE 80
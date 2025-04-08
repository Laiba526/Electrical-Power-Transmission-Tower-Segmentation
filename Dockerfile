
FROM node:18 AS frontend
WORKDIR /app
COPY client/ ./client
WORKDIR /app/client
RUN npm install
RUN npm run build


FROM node:18 AS backend
WORKDIR /app
COPY server/ ./server
COPY --from=frontend /app/client/build ./server/public
WORKDIR /app/server
RUN npm install
CMD ["node", "server.js"]


FROM node:current-alpine3.18
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install && cd client && npm install && cd .. && npm run build
EXPOSE 8080
CMD ["npm", "run", "start"]
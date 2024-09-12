FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm
RUN mkdir -p /app
WORKDIR /app
COPY . .
# RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-aarch64.zip" -o "awscliv2.zip" && unzip awscliv2.zip && sudo ./aws/install
RUN npm install && cd client && npm install && cd .. && npm run build
EXPOSE 8080
CMD ["npm", "run", "start"]
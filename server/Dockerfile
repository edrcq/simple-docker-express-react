FROM node:20-alpine

RUN mkdir /app
WORKDIR /app

# Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

EXPOSE 8080

ENTRYPOINT ["npm", "run"]

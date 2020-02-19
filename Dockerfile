FROM node:8.10.0

# Create app directory
WORKDIR /app

COPY . /app

RUN npm install

CMD npm start

EXPOSE 3000


FROM node:12

RUN echo "Whats up"

# Create app directory
WORKDIR /app

COPY . /app

RUN npm install

CMD npm start

EXPOSE 3000

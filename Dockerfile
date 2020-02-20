FROM node:12.16.1

# Delete previous /app

# Create app directory
WORKDIR /app
CMD rm -rf /app

COPY . /app


#RUN npm uninstall core-js
#RUN npm install --save core-js@3
#RUN npm install --save eslint-plugin-react-hooks
#RUN npm install --save-dev @testing-library/react
RUN npm install

CMD npm start

EXPOSE 3000


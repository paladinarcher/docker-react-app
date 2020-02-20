FROM node:12.16.1

# Delete previous /app
RUN ls -al /app
RUN rm -rf /app
RUN ls -al /app

# Create app directory
WORKDIR /app
RUN ls -al /app

COPY . /app
RUN ls -al /app
RUN ls -al /


#RUN npm uninstall core-js
#RUN npm install --save core-js@3
#RUN npm install --save eslint-plugin-react-hooks
#RUN npm install --save-dev @testing-library/react
RUN npm install

CMD npm start

EXPOSE 3000


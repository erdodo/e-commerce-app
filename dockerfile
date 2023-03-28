FROM node:latest
RUN apt-get update
RUN apt-get -y install nano
RUN rm -rf /usr/src/app
RUN mkdir -p /usr/src/app
ADD . /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
CMD [ "node", "app.js" ]
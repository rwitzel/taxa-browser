FROM node:9.2.0
LABEL author=https://github.com/rwitzel

ADD server /application
WORKDIR /application

RUN npm install

VOLUME /application/contents

CMD node server.js /application/contents
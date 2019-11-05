FROM node:current-alpine

ENV HOME=/app

RUN apk update && apk upgrade
RUN npm install yarn -g

WORKDIR $HOME

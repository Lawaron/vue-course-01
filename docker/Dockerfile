FROM node:24-slim

RUN npm install -g npm@11.5.2

ARG HOST_UID
ARG HOST_GID

RUN usermod -u $HOST_UID node && \
    groupmod -g $HOST_GID node

WORKDIR /home/node/app

RUN chown -R node:node .

USER node

EXPOSE 5173
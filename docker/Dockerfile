FROM node:24-slim AS base

RUN npm install -g npm@11.6.0

ARG HOST_UID
ARG HOST_GID

RUN usermod -u $HOST_UID node && \
    groupmod -g $HOST_GID node

FROM base AS firebase

EXPOSE 9005

RUN npm install -g firebase-tools

WORKDIR /firebase

COPY ./docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

RUN chmod +x /usr/local/bin/docker-entrypoint.sh

COPY ./firebase/* .

COPY ./build ./dist

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]

FROM base AS build

RUN mkdir /app && chown node:node /app

WORKDIR /app

USER node

COPY --chown=node:node ./app/package*.json .

RUN npm install

COPY --chown=node:node ./app ./

ENTRYPOINT ["npm"]

CMD ["run", "build"]

FROM build AS dev

EXPOSE 5173

ENTRYPOINT ["npm"]

CMD ["run", "dev", "--", "--host"]

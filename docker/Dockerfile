FROM node:24-slim AS base

RUN npm install -g npm@11.6.0

FROM base AS npm

RUN mkdir /app && chown node:node /app

WORKDIR /app

USER node

ENTRYPOINT ["npm"]

CMD ["run", "dev", "--", "--host"]

FROM base AS firebase

RUN npm install -g firebase-tools
RUN mkdir /firebase && chown node:node /firebase
RUN mkdir -p /home/node/.config && chown node:node /home/node/.config

USER node

WORKDIR /firebase

ENTRYPOINT ["firebase"]

CMD ["--help"]

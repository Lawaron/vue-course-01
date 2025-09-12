FROM node:24-slim AS base

RUN npm install -g npm@11.6.0

FROM base AS npm

RUN mkdir /app && chown node:node /app

WORKDIR /app

USER node

ENTRYPOINT ["npm"]

CMD ["run", "dev", "--", "--host"]

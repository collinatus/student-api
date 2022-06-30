# syntax=docker/dockerfile:1

FROM node:latest as base
WORKDIR /code
COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base as test
RUN npm ci
COPY . .
RUN npm run test

FROM base as prod
RUN npm ci --production
COPY . .
CMD ["node", "index.js"]

FROM node:10.15-alpine

WORKDIR /usr/app

COPY package.json .
COPY config-overrides.js .
COPY .babelrc .
COPY src ./src
COPY public ./public

RUN yarn install

EXPOSE 8080

CMD ["yarn", "prod"]

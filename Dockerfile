FROM node:10.15-alpine AS builder

WORKDIR /usr/build

COPY . .

RUN yarn install
RUN yarn build

FROM node:10.15-alpine

WORKDIR /usr/app

COPY --from=builder /usr/build/.next /usr/app/.next
COPY --from=builder /usr/build/node_modules /usr/app/node_modules
COPY --from=builder /usr/build/server.js /usr/app/server.js
COPY --from=builder /usr/build/lib /usr/app/lib
COPY --from=builder /usr/build/components /usr/app/components
COPY --from=builder /usr/build/pages /usr/app/pages
COPY --from=builder /usr/build/static /usr/app/static
COPY --from=builder /usr/build/package.json /usr/app/package.json
COPY --from=builder /usr/build/next.config.js /usr/app/next.config.js
COPY --from=builder /usr/build/.babelrc /usr/app/.babelrc

EXPOSE 3000

CMD ["yarn", "start"]

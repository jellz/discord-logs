FROM node:12-alpine

ENV PORT 3000

WORKDIR /usr/src/app

RUN apk add python make gcc g++ git bzip2 dumb-init

COPY yarn.lock ./
COPY package.json ./

RUN yarn
RUN yarn global add node-pre-gyp

COPY . .

RUN yarn build

ENV NODE_ENV production
CMD ["yarn", "start"]
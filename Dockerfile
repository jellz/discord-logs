FROM node:12-alpine

ENV PORT 3000

WORKDIR /usr/src/app

COPY yarn.lock ./
COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

ENV NODE_ENV production
CMD ["yarn", "start"]
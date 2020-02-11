#FROM node:alpine
FROM node:10

WORKDIR '/var/www/app'

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm","start"]
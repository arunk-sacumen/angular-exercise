FROM node:18.16.0-alpine3.17 as DEVELOPMENT

# RUN npm install -g npm@10.2.4

RUN npm i -g @angular/cli@16.0.0

WORKDIR /home/sacumen/app

COPY ./*.json .

RUN npm install

COPY . .

# CMD [ "ng","serve" ]

FROM node:13.10.1-alpine

RUN mkdir -p /srv/app/frontend
WORKDIR /srv/app/frontend


COPY . /srv/app/frontend/

RUN npm install


# npm/webpack build here

CMD ["npm", "start"]

FROM node:10-stretch-slim

RUN apt-get update && apt-get install --yes python3 

RUN mkdir -p /srv/app/backend
WORKDIR /srv/app/backend/


COPY . /srv/app/backend/

RUN npm install


CMD ["node", "src/index.js"]
 

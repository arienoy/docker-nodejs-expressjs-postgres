FROM node:latest

WORKDIR /app

# copy configuration files for installation 
COPY ./project/package.json /app
COPY ./project/package-lock.json /app

RUN npm ci

# copy sql script
COPY ./project/scripts/init.sql /docker-entrypoint-initdb.d/init.sql

EXPOSE 4000

CMD ["npm", "start"]

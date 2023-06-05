FROM node:18-alpine AS build

ENV HOME=/home/app
WORKDIR $HOME

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run test
RUN npm run build

FROM nginx:alpine AS running
WORKDIR /usr/share/nginx/html
COPY --from=build /home/app/build .
EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

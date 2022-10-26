FROM node:alpine
WORKDIR /app
EXPOSE 4500
COPY package.json ./
RUN npm install
COPY . ./
CMD [ "npm", "start" ]
FROM node:latest
WORKDIR /frontend
COPY package.json .
RUN yarn install
COPY . .
CMD ["npm", "start"]
FROM node:12.13.1

WORKDIR /veterinaria

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

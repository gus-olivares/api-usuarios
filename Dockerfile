FROM gusolivares/api-usuarios:1.0

WORKDIR /app

COPY . /app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]
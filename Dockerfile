#imagem base
FROM node:9.11.1-alpine

RUN npm i -g http-server

#Diretório base
WORKDIR /app

#COPIA O package.json
COPY package*.json ./

#INSTALA AS DEPENDENCIAS
RUN npm install

#Copia os arquivos
COPY . .

#SOBE A APLICACAO
RUN npm run dev

#EXPOE A PORTA 8080
EXPOSE 8081
CMD [ "http-server", "dist" ]
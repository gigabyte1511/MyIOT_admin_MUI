FROM node

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3052

CMD ["npm","run","dev"]

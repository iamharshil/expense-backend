# docker file
FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm install 
RUN npm run build

EXPOSE 4000
CMD ["npm", "start"]
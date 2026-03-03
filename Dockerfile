FROM node:18
WORKDIR /var/lib/jenkins/workspace
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["node","app.js"]

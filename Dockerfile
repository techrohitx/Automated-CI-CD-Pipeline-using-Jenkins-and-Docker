FROM node:18
WORKDIR /var/lib/jenkins/workspace/node-cicd-docker
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["node","app.js"]

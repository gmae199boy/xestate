FROM node:12.18.0
MAINTAINER gmae199boy
# EXPOSE 9000
# WORKDIR /home/kim/project
RUN npm install -g nodemon
CMD ["npm", "start"]
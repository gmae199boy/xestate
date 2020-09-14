FROM node:10.16.0
MAINTAINER gmae199boy
ENV DEBUG *
ENV DEVMODE DOCKER
WORKDIR /home/dev/xestate_react
COPY . /home/dev/xestate_react
RUN npm install
CMD ["npm", "start"]
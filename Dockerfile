FROM node:latest
LABEL mantainer="LuMizera"
LABEL version="1.0"
WORKDIR /var/www/myfrontend
COPY package.json /var/www/myfrontend
EXPOSE 3000
CMD [ "./build-front.sh" ]
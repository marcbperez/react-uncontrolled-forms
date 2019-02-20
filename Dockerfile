FROM nginx
ADD ./build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

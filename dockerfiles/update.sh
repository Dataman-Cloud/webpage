#!/usr/bin/env bash

#frontend
sed -i "s#ENVIRONMENT#$WEBPAGE_ENVIRONMENT#g" /usr/share/nginx/html/www.shurenyun.com/conf.js
sed -i "s#DASHBOARD#$WEBPAGE_DASHBOARD#g" /usr/share/nginx/html/www.shurenyun.com/conf.js
sed -i "s#MARKET#$WEBPAGE_MARKET#g" /usr/share/nginx/html/www.shurenyun.com/conf.js

#nginx
sed -i "s#NGINX_USER#$NGINX_USER#g" /etc/nginx/nginx.conf
sed -i "s#NGINX_WORKER_PROCESSES#$NGINX_WORKER_PROCESSES#g" /etc/nginx/nginx.conf
sed -i "s#NGINX_WORKER_CONNECTIONS#$NGINX_WORKER_CONNECTIONS#g" /etc/nginx/nginx.conf
sed -i "s#CONF_DASHBOARD_SERVERNAME#$CONF_DASHBOARD_SERVERNAME#g" /etc/nginx/conf.d/www.dataman-inc.net.conf
sed -i "s#CONF_DASHBOARD_LISTEN_PORT#$CONF_DASHBOARD_LISTEN_PORT#g" /etc/nginx/conf.d/www.dataman-inc.net.conf
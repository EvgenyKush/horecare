FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html bridge.js style.css /usr/share/nginx/html/
RUN mkdir -p /usr/share/nginx/html/assets
COPY assets/coffee-box.png /usr/share/nginx/html/assets/coffee-box.png

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

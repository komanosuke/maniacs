# nginx/Dockerfile

FROM nginx:latest

# nginxの設定ファイルをコピー
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

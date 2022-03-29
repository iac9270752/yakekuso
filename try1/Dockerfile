FROM node:alpine

# 作業ディレクトリへ移動
WORKDIR /app

RUN npm install express
RUN npm install ejs


COPY ./app /app

# 3000番ポートを公開
EXPOSE 3000

FROM ruby:3.1.3

ENV RAILS_ENV=production
ARG SECRET_KEY_BASE
ENV SECRET_KEY_BASE=$SECRET_KEY_BASE

# 必要なパッケージをインストール
RUN apt-get update -qq && \
    apt-get install -y apt-utils \
    build-essential \
    libpq-dev \
    default-mysql-client && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    npm install --global yarn

# アプリケーションディレクトリを作成
RUN mkdir /app
WORKDIR /app

# GemfileとGemfile.lockをコピーしてbundle install
COPY Gemfile Gemfile.lock ./
RUN bundle install -j4

# アプリケーションのソースをコピー
COPY . .

# アセットのプリコンパイル
RUN bundle exec rails assets:precompile

# ポート3000を公開
EXPOSE 3000

# Railsを起動
CMD ["bundle", "exec", "unicorn", "-p", "3000", "-c", "/app/config/unicorn.rb"]

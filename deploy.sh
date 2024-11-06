#!/bin/bash

echo "🚀 Starting deployment..."

# 拉取最新代码
echo "📥 Pulling latest changes..."
git pull origin main

# 安装依赖
echo "📦 Installing dependencies..."
npm install

# 构建项目
echo "🛠️ Building project..."
npm run build

# 设置权限
echo "🔒 Setting permissions..."
sudo chown -R www-data:www-data build
sudo chmod -R 755 build

# 重启 Nginx
echo "🔄 Restarting Nginx..."
sudo systemctl restart nginx

echo "✅ Deployment completed!"

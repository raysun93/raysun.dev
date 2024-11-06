#!/bin/bash

set -e

# 备份当前版本
backup() {
    echo "📦 Creating backup..."
    timestamp=$(date +%Y%m%d_%H%M%S)
    mkdir -p backups
    cp -r build "backups/build_$timestamp"
}

# 部署前备份
backup || { echo "❌ Backup failed"; exit 1; }

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

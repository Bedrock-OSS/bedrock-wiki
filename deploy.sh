#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

# echo 'wiki.bedrock.dev' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:bedrock-oss/bedrock-wiki-vite.git master:gh-pages

cd -
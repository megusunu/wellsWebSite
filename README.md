# Wells合同会社 HP

https://wells.jp

## よく使うコマンド

```bash
# ローカル開発サーバー起動（http://localhost:9000）
npm run dev

# ビルド
npm run build

# ビルド後のプレビュー
npm run preview
```

## デプロイ

mainブランチにpushすると自動デプロイ（GitHub Actions）。

詳細は [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md) を参照。

## ディレクトリ構成

```
src/
├── content/
│   └── news/       ← お知らせ記事（Markdown）
├── pages/
└── components/
```

## 記事の追加

`src/content/news/` にMarkdownファイルを追加。

ファイル名: `YYYY-MM-DD-slug.md`

```markdown
---
title: "記事タイトル"
description: "説明"
date: YYYY-MM-DD
category: news
tags: ["タグ1", "タグ2"]
author: "草間 恵"
featured: false
draft: false
---

本文...
```

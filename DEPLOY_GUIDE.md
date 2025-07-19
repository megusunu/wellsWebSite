# wells.jp デプロイガイド

## 前提条件
- Node.js 20以上
- npm または yarn
- .envファイルに`PUBLIC_GA4_MEASUREMENT_ID`が設定済み

## 手動デプロイ手順

### 1. ビルド
```bash
# 依存関係のインストール（初回のみ）
npm install

# ビルド実行
npm run build
```

### 2. デプロイ
distフォルダの中身をwells.jpのドキュメントルートにアップロード

```bash
# 例：rsyncを使う場合
rsync -avz --delete dist/ user@wells.jp:/var/www/html/

# 例：FTPクライアントを使う場合
# FileZillaなどでdistフォルダの中身をアップロード
```

## 自動デプロイ設定

### GitHub Actions（推奨）

1. GitHubのSecretsに以下を設定：
   - `GA4_MEASUREMENT_ID`
   - `FTP_SERVER` / `FTP_USERNAME` / `FTP_PASSWORD`
   または
   - `HOST` / `USERNAME` / `SSH_KEY`

2. mainブランチにpushすると自動デプロイ

### ローカルからの簡易デプロイスクリプト

`deploy.sh`を作成：

```bash
#!/bin/bash
# deploy.sh

# ビルド
echo "Building site..."
npm run build

# デプロイ（FTPの例）
echo "Deploying to wells.jp..."
lftp -u $FTP_USER,$FTP_PASS $FTP_HOST << EOF
mirror -R --delete dist/ /
bye
EOF

echo "Deploy complete!"
```

使用方法：
```bash
chmod +x deploy.sh
./deploy.sh
```

## デプロイ後の確認

1. **サイトの表示確認**
   - https://wells.jp にアクセス
   - 各ページが正常に表示されるか

2. **Google Analytics確認**
   - GA4のリアルタイムレポートでアクセスが記録されているか
   - ブラウザの開発者ツールでgtag.jsが読み込まれているか

3. **エラーチェック**
   - ブラウザコンソールにエラーがないか
   - 404エラーが発生していないか

## トラブルシューティング

### 環境変数が反映されない
- ビルド時に.envファイルが読み込まれているか確認
- `PUBLIC_`プレフィックスがついているか確認

### CSSや画像が表示されない
- astro.config.mjsの`site`と`base`設定を確認
- 現在の設定：
  - site: 'https://wells.jp'
  - base: '/'

### 404エラーが発生する
- サーバーの設定でSPAフォールバックが必要な場合：
  - すべてのルートを`index.html`にリダイレクト
  - または各ページの`index.html`が正しく配置されているか確認
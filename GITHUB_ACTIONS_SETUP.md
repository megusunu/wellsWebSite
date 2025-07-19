# GitHub Actions 自動デプロイ設定ガイド

## 設定手順

### 1. GitHub Secretsの設定

1. GitHubでリポジトリを開く
2. Settings → Secrets and variables → Actions
3. 「New repository secret」をクリック

#### 必須の環境変数
| Name | Value |
|------|-------|
| GA4_MEASUREMENT_ID | G-TKXXDRCQ08 |

#### デプロイ方法に応じて追加

**FTPの場合：**
| Name | Value |
|------|-------|
| FTP_SERVER | ftp.wells.jp（実際のサーバー名） |
| FTP_USERNAME | FTPユーザー名 |
| FTP_PASSWORD | FTPパスワード |

**SSH/SFTPの場合：**
| Name | Value |
|------|-------|
| SSH_HOST | wells.jp |
| SSH_USERNAME | SSHユーザー名 |
| SSH_KEY | 秘密鍵の内容（全文） |
| SSH_TARGET_DIR | /var/www/html（実際のパス） |

### 2. ワークフローファイルの有効化

`.github/workflows/deploy-to-server.yml`を編集：

1. 使用するデプロイ方法のコメントアウトを解除
2. 不要な方法は削除またはコメントアウトのまま

### 3. テスト実行

1. GitHubのActionsタブを開く
2. 「Deploy to wells.jp」を選択
3. 「Run workflow」ボタンで手動実行
4. ログを確認

## デプロイ方法の選び方

### FTP
- メリット：設定が簡単
- デメリット：速度が遅い、セキュリティが低い
- 推奨：他の方法が使えない場合

### SSH/SFTP
- メリット：セキュア、高速
- デメリット：SSH鍵の設定が必要
- 推奨：SSHアクセスが可能な場合

### rsync
- メリット：差分転送で高速、帯域節約
- デメリット：rsyncがサーバーに必要
- 推奨：大きなサイトの場合

## トラブルシューティング

### ビルドエラー
```
Error: Cannot find module
```
→ `npm ci`が正しく実行されているか確認

### デプロイエラー（FTP）
```
Error: Timeout
```
→ FTPサーバーのアドレス、ポート、認証情報を確認

### デプロイエラー（SSH）
```
Error: Permission denied
```
→ SSH鍵の権限、ターゲットディレクトリの書き込み権限を確認

### 環境変数が反映されない
→ Secretsが正しく設定されているか確認
→ ビルドログで環境変数が渡されているか確認

## ワークフローのカスタマイズ

### ブランチを変更
```yaml
on:
  push:
    branches: [ main, develop ]  # developブランチも追加
```

### 特定のファイルだけ監視
```yaml
on:
  push:
    branches: [ main ]
    paths:
      - 'src/**'
      - 'public/**'
      - 'package.json'
```

### デプロイ前に通知
```yaml
- name: Notify start
  run: |
    curl -X POST ${{ secrets.SLACK_WEBHOOK }} \
      -H 'Content-type: application/json' \
      -d '{"text":"デプロイを開始します"}'
```

## セキュリティのベストプラクティス

1. **Secretsは絶対にコードに書かない**
2. **最小権限の原則**
   - FTP/SSHユーザーは必要最小限の権限のみ
3. **定期的な認証情報の更新**
   - パスワードやSSH鍵は定期的に変更

## 次のステップ

1. まずは手動実行でテスト
2. 成功したらmainブランチへのプッシュで自動化
3. 必要に応じてSlack通知などを追加
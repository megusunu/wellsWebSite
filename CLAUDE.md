# Wells合同会社ホームページ プロジェクト

## プロジェクト概要

Wells合同会社の公式ホームページ。システム開発とハンドメイド事業を展開する一人会社のコーポレートサイト。

### 技術スタック
- **フレームワーク**: Astro
- **言語**: TypeScript
- **CSS**: TailwindCSS
- **コンテンツ管理**: Astro Content Collections
- **マークダウン処理**: marked
- **開発サーバー**: http://localhost:9000/

## ビジネス要件

### 会社情報
- **会社名**: Wells合同会社
- **代表社員**: 草間 恵
- **設立**: 2023年10月5日
- **所在地**: 東京都渋谷区（リモートワーク中心のため地名は控えめに表示）
- **資本金**: 100,000円

### 事業内容
1. **AWSクラウド開発事業**
   - 車載・ナビ向けサーバサイド開発、クラウドインフラ構築・運用

2. **モバイルアプリ開発事業**
   - Android・iOS、地図観光アプリ、車載ナビ連携アプリの開発

3. **地図・ナビゲーション事業**
   - 車載ナビ、地図アプリ、位置情報システムの専門的開発

4. **出版・メディア事業**
   - 技術書同人誌の経験を活かした技術書、電子出版物の企画・制作

5. **システム開発サービス**
   - Webアプリケーション開発（JavaScript、PHP、React、WordPress、OpenStreetMap、ChatGPT API）
   - モバイルアプリ開発（Android、iOS、Kotlin、Swift、React Native、Firebase、Unity）
   - 技術サポート・コンサルティング（技術選定、AIツール活用、API連携、システム設計）
   - 運用保守・レガシーシステム対応（見えていない作業の見える化）

6. **ハンドメイド事業**
   - 手編みニットウェア（ペット用品、リストウォーマー、季節小物）
   - 子供向けワークショップ企画・運営
   - ハンドメイドマルシェ参加

### 外部販売サイト
- **Square**: https://megusunulab.square.site/
- **minne**: https://minne.com/@megusunu0120

### SNS
- **Instagram**: @megusunu
- **X**: @megusunu

## デザインコンセプト

### カラーパレット
```css
colors: {
  'natural-green': '#7CB342',
  'natural-light-green': '#AED581', 
  'natural-beige': '#F5E6D3',
  'natural-brown': '#8D6E63',
  'warm-yellow': '#FFD54F',
  'vibrant-orange': '#FF7043',    // ポイントカラー
  'light-orange': '#FFAB91',
}
```

### デザイン原則
- **ナチュラル**: 緑・ベージュを基調とした温かみのある配色
- **ポジティブ**: オレンジをアクセントカラーとして使用
- **モダン**: ゴシック体でスタイリッシュな印象
- **シンプル**: 不要な装飾を避けたクリーンなデザイン

## サイト構造

### ページ構成
1. **メインページ** (`/`)
   - ヒーローセクション
   - システム開発サービス（訴求力のある情報を前面に）
   - ハンドメイド作品紹介（差別化要素）
   - お問い合わせ
   - 会社概要（基本情報として最後に配置）

2. **代表について** (`/about-ceo`)
   - プロフィール（実写写真使用）
   - 起業の想い
   - 経歴タイムライン
   - 「半径3メートル」の哲学（改善された可視化）
   - ロゴストーリー

3. **お知らせ・更新情報** (`/news`)
   - 記事一覧（カテゴリ別フィルタ）
   - カテゴリ：news、blog、project、event、update
   - タグ機能
   - 著者別表示（草間恵 / Wells合同会社）

4. **個別記事ページ** (`/news/[slug]`)
   - マークダウン形式の記事表示
   - カテゴリバッジ、タグ表示
   - 著者情報（プロフィール付き）
   - 関連記事表示

### コンポーネント構造
```
src/
├── components/
│   ├── Header.astro           # ナビゲーション（お知らせリンク追加）
│   ├── Hero.astro            # ヒーローセクション
│   ├── Services.astro        # システム開発
│   ├── Handmade.astro        # ハンドメイド
│   ├── CompanyOverview.astro # 会社概要
│   ├── Contact.astro         # お問い合わせ
│   ├── Footer.astro          # フッター
│   ├── ImageSlideshow.astro  # スライドショー
│   ├── About.astro           # 代表について（旧）
│   └── Philosophy.astro      # 哲学セクション
├── content/
│   ├── config.ts             # Content Collections設定
│   └── news/                 # ニュース記事（マークダウン）
│       ├── 2025-01-13-news-section-launch.md
│       ├── 2025-01-13-why-engineers-knit.md
│       └── 2025-01-14-new-service-technical-support.md
├── layouts/
│   └── Layout.astro          # ベースレイアウト
├── pages/
│   ├── index.astro           # メインページ
│   ├── about-ceo.astro       # 代表についてページ
│   ├── news/
│   │   ├── index.astro       # ニュース一覧
│   │   └── [...slug].astro   # 個別記事ページ
└── styles/
    └── global.css            # グローバルスタイル（マークダウン含む）
```

## 主要機能

### ヒーローセクション
- **背景**: 自然で柔軟な挑戦のイメージ（ぼかし効果適用）
- **文字可読性**: backdrop-blur-lg、黒オーバーレイで改善
- **会社名**: ゴシック体、白文字、ドロップシャドウ
- **地名表示**: リモートワーク重視のため削除

### スライドショー機能
- **自動再生**: 4秒間隔
- **ナビゲーション**: 左右矢印ボタン
- **インジケーター**: ドット（オレンジでアクティブ表示）
- **ホバー制御**: マウスオーバーで自動再生停止
- **複数インスタンス**: 独立した動作（スコープ分離）

### 商品画像
```
public/images/products/
├── pet-wear/           # ペット用ニットウェア (5枚)
├── wrist-warmers/      # リストウォーマー (4枚)
└── tulips/            # 編みぐるみ・季節小物 (4枚)
```

### プロフィール画像
```
public/images/
└── profile.jpg         # 代表のプロフィール写真
```

## ロゴストーリー
- **Wells**のロゴは、夫が社会人になったばかりの時に友達と起業を夢見て作ったもの
- 「井戸」や「知恵の泉」を意味し、アイデアが自然と湧き出て、人が集まる場所になりたいという想いが込められている
- 代表がその想いに共感し、流れに乗って使用することに

## ロゴ・ブランディング

### ロゴファイル構成
```
public/images/logo/
├── 1x/                # 標準解像度
├── 2x/                # 高解像度
└── 4x/                # 超高解像度
```

### ロゴバリエーション
- `wellslogo.png` - フルロゴ（通常）
- `wellslogo_white.png` - フルロゴ（白）
- `wellslogo_black.png` - フルロゴ（黒）
- `logomark.png` - ロゴマークのみ（通常）
- `logomark_white.png` - ロゴマークのみ（白）
- `logomark_black.png` - ロゴマークのみ（黒）

### ロゴ使用箇所
- **ヘッダー**: フルロゴ
- **ヒーローセクション**: 白いロゴマーク
- **フッター**: 白いフルロゴ
- **ファビコン**: ロゴマーク

## デプロイ・分析設定

### ホスティング
- **本番環境**: https://wells.jp （GitHub Pages + カスタムドメイン）
- **GitHub Pages設定**: 
  - サイト: https://wells.jp
  - ベースパス: /
  - 自動デプロイ: mainブランチへのプッシュで自動実行

### Google Analytics 4
- **測定ID**: 環境変数 `PUBLIC_GA4_MEASUREMENT_ID` で管理
- **実装**: Layout.astroに組み込み（全19ページに自動適用）
- **GitHub Actions**: Secretsに設定して自動デプロイ時に適用
- **確認方法**: ビルド後、全HTMLファイルにgtagスクリプトが含まれることを確認済み

### Google Search Console
- **認証方法**: ドメイン認証（DNSレコード）
- **サイトマップ**: /sitemap-index.xml

### プライバシーポリシー
- **URL**: /privacy-policy
- **内容**: GA4使用について明記
- **リンク**: フッターに配置

## 実績・プロジェクト

### 最近の実績（新しい順）
1. **WixからWordPressへの移植プロジェクト**
   - WordPress、ChatGPT API、Eコマース

2. **React Nativeチャットアプリ機能開発**
   - React Native、Firebase、プッシュ通知

3. **OSM地図Webアプリ開発・保守**
   - OpenStreetMap、JavaScript、PHP、地理情報システム

4. **保守切れPHPホームページの復旧**
   - PHP、レガシーシステム、セキュリティ対応

### 技術スタック
- **Frontend**: React、Vue.js、JavaScript、TypeScript、Astro
- **Backend**: PHP、WordPress、API設計、AWS（CloudFront、EC2、DynamoDB、Lambda、API Gateway）
- **Mobile**: Android、iOS、Kotlin、Swift、React Native、Firebase、Unity
- **AI/API**: ChatGPT API、OpenStreetMap API
- **Legacy**: レガシーシステム対応、C/C++、Linux、Tcl/Tk、システム改善

## 会社の特徴・哲学

### 「半径3メートル」の哲学
身近なところから価値を提供し、変化に柔軟でいることを大切にする企業理念。

### 代表の背景
- **学歴**: 甲南大学理学部物理学科卒（~2006年）
- **経験**: システム開発経験豊富（2007年~）、モバイル開発10年以上（2013年~）
- **特徴**: 技術とハンドメイドの両立、物理学的思考と手仕事の配慮を組み合わせたアプローチ
- **専門領域**: 車載・ナビ系システム、地図アプリ、AWS環境、レガシーシステム対応

### 起業の想い
技術と手仕事の両方で人々の課題を解決したいという想いから、新しい技術への挑戦と人生のセーフティネットとしての安定基盤、手仕事で伝える温かさを組み合わせたサービスを提供。

## 開発ルール

### フォント使用
- **ヘッダー**: `font-sans font-black` (ゴシック体・極太)
- **本文**: `font-sans` (ゴシック体)
- **統一原則**: サイト全体でゴシック体を使用（セリフ体は使用しない）

### 表現ガイドライン
- **年数表記**: 「17年」などの具体的年数は避け、「豊富な」「多数の」などを使用
- **オフショア開発**: 前面に出さず、技術実装経験にフォーカス
- **証券系**: 具体的業界名は避け、「モバイルアプリ」など一般的表現を使用
- **二刀流**: 使わず、「両立」「独自のアプローチ」などを使用
- **コンサルティング**: 使わず、「技術サポート」「お手伝い」などを使用
- **ご相談**: 「お問い合わせ」に統一

### カラー使用原則
- **メインカラー**: natural-green
- **アクセント**: vibrant-orange
- **背景**: natural-beige系
- **テキスト**: natural-brown、グレー系

### レスポンシブ対応
- **ブレークポイント**: Tailwind標準（sm、md、lg、xl）
- **画像**: srcset対応で高解像度対応
- **レイアウト**: モバイルファースト

### パフォーマンス
- **画像最適化**: 複数解像度対応
- **ローカル管理**: 外部依存を最小化
- **遅延読み込み**: `loading="lazy"`

## コマンド

### 開発
```bash
npm run dev          # 開発サーバー起動 (port 9000)
npm run build        # 本番ビルド
npm run preview      # プレビューサーバー
```

### デプロイ
```bash
# 環境変数設定（.envファイル作成）
cp .env.example .env
# PUBLIC_GA4_MEASUREMENT_ID を設定

# 手動ビルド&デプロイ
npm run build
# distフォルダの内容をアップロード

# 自動デプロイ（GitHub Actions）
# mainブランチにプッシュすると自動実行
git push origin main
```

### Git管理
- **ブランチ**: main
- **コミット**: 日本語で詳細に記述
- **署名**: Claude Code生成の旨を記載
- **リモート**: git@github.com:megusunu/wellsWebSite.git

## 技術的な課題と解決

### スライドショー
- **問題**: 複数インスタンスでの動作干渉
- **解決**: スコープ分離とユニークID使用

### 文字可読性
- **問題**: 背景画像と文字の重なり
- **解決**: backdrop-blur-lg、オーバーレイ強化、画像ぼかし

### 移動量の計算
- **問題**: スライドが1/3〜1/4しか移動しない
- **解決**: `(currentSlide * 100) / totalImages`で正確な計算

## 品質改善履歴

### v2.2.0での改善内容
1. **SEO対策完備**
   - OG画像とTwitter Card画像パス追加
   - メタ情報の完全実装

2. **アクセシビリティ向上**
   - aria-label、aria-expanded、aria-controls属性追加
   - role="status"、aria-live="polite"によるスクリーンリーダー対応
   - フォーカス状態の視覚的改善
   - 高コントラストモード対応

3. **デザイン統一性**
   - global.cssでのアニメーション定義統合
   - 共通クラスの整理
   - コンポーネント間の重複コード削除

4. **技術的改善**
   - モバイルメニューの状態管理改善
   - プロフィール画像alt属性の具体化

### v2.4.0 - 職務経歴書ベースのサービス内容最適化

1. **一人会社として現実的なサービス内容に調整**
   - AWSクラウド開発 → Webアプリケーション開発（実際の会社実績ベース）
   - 地図・ナビゲーション → 技術サポート・コンサルティング（適切な規模感）
   - 職務経歴書の豊富な実績を活かしつつ、現実的なプロジェクト規模に調整

2. **サービス強化**
   - 具体的な技術スタック明記（AWS、モバイル開発10年以上、地図系）
   - ChatGPT API活用など現在のニーズに対応
   - 運用保守・レガシーシステム対応の強み明確化

3. **会社概要の事業領域更新**
   - AWSクラウド開発事業、モバイルアプリ開発事業、地図・ナビゲーション事業追加
   - 職務経歴書ベースの専門分野を反映

4. **実績プロジェクト最適化**
   - 新しい順に並べ替え（ChatGPT API → React Native → OSM地図 → PHP復旧）
   - 商品名「Beatmap」削除、匿名化徹底
   - 会社員時代の大規模案件から会社設立後の実際の実績に変更

5. **代表経歴の正確性向上**
   - 職務経歴書に基づく正確な年数・経験内容
   - モバイル開発開始2013年を正しく反映
   - 専門領域（車載・ナビ系、AWS、レガシーシステム）明記

### v2.3.0 - ニュース・ブログ機能追加
1. **Content Collections実装**
   - Astro Content Collectionsでマークダウン記事管理
   - 5つのカテゴリ：news、blog、project、event、update
   - フロントマター：title、description、date、category、tags、author、featured、draft

2. **ニュース機能**
   - ニュース一覧ページ（カテゴリ別フィルタ、検索機能）
   - 個別記事ページ（マークダウンレンダリング、関連記事表示）
   - 著者情報表示（草間恵 / Wells合同会社の使い分け）

3. **マークダウン処理**
   - markedライブラリ使用で確実なHTMLレンダリング
   - global.cssでマークダウンスタイル統一
   - 見出し、リスト、リンク、引用、コードブロック対応

4. **ナビゲーション強化**
   - ヘッダーに「お知らせ」リンク追加
   - ページ構造の論理的順序（サービス→作品→お知らせ→問合せ→会社概要）

5. **コンテンツ品質向上**
   - 記事にTODOコメント追加（肉付けガイダンス）
   - 重複署名削除（authorフィールドに統一）
   - マークダウン記法修正

## 今後の拡張予定

### 機能追加
1. お問い合わせフォームのバックエンド実装（Netlify Forms等）
2. ~~Google Analytics導入~~ ✅ 完了（2025-01-19）
3. サイトマップ生成
4. 商品詳細ページ
5. RSS配信機能
6. コメント機能（GitHub Issues連携等）
7. ~~タグページ作成~~ ✅ 完了（2025-01-15）
8. 検索機能強化

### さらなる最適化
- WebP画像形式への変換
- 構造化データの実装
- パフォーマンス最適化
- PWA対応検討

## 注意事項

### 外部リンク
- minne、Squareの商品画像は直接リンク不可
- 必要に応じてローカルに保存

### ブランドガイドライン
- ロゴの縦横比は維持
- カラーパレットから逸脱しない
- ゴシック体で統一
- シンプルなデザインを心がける

### 開発原則
- コンポーネントの再利用性を重視
- TypeScript型安全性を確保
- アクセシビリティを考慮（ARIA属性、フォーカス管理、スクリーンリーダー対応）
- パフォーマンスを最優先
- SEO対策を標準装備
- デザイン統一性の維持（global.cssでの共通定義）

### 表現に関する配慮
- リモートワーク重視のため地理的制約を強調しない
- 具体的な業界名や年数は控えめに表現
- 専門性は技術内容で示し、経験年数には依存しない
- 多様な働き方と価値観を尊重した表現を心がける

## Content Collections設定

### スキーマ定義
```typescript
// src/content/config.ts
const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(['news', 'blog', 'project', 'event', 'update']),
    tags: z.array(z.string()).optional(),
    author: z.enum(['草間 恵', 'Wells合同会社']).default('Wells合同会社'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});
```

### 記事作成ガイドライン
- **ファイル名**: `YYYY-MM-DD-slug.md`
- **カテゴリ使い分け**:
  - `news`: 公式発表・サービス開始
  - `blog`: 個人的なコラム・考察
  - `project`: プロジェクト報告・事例
  - `event`: イベント・ワークショップ
  - `update`: サービス更新・機能追加
- **著者使い分け**:
  - `草間 恵`: 個人的なコラム・体験談
  - `Wells合同会社`: 公式発表・サービス情報

### TODOコメント
記事にはHTMLコメント形式で肉付けガイダンスを追加：
```html
<!-- [TODO] 具体例を追加すると説得力が増します
例：
- 実際の事例や体験談
- 数値データや具体的な成果
- 読者へのアクションの提案
-->
```

---

### v2.5.0 - Google Analytics & デプロイ設定

1. **Google Analytics 4 導入**
   - 環境変数でGA4測定IDを管理
   - Layout.astroにトラッキングコード実装
   - プライバシーポリシーページ作成

2. **デプロイ設定**
   - GitHub Pages + カスタムドメイン（wells.jp）対応
   - GitHub Actionsで自動デプロイ設定
   - 環境変数をSecretsで管理

3. **プライバシー対応**
   - /privacy-policyページ作成
   - Google Analytics使用について明記
   - フッターにリンク追加

4. **ドキュメント整備**
   - ANALYTICS_SETUP.md: GA4とSearch Console設定ガイド
   - DEPLOY_GUIDE.md: デプロイ手順書
   - GITHUB_ACTIONS_SETUP.md: 自動デプロイ設定ガイド

5. **その他の改善**
   - 御朱印帳風シール帳の記載削除
   - joinPath関数でURL結合問題を修正
   - お知らせページの壊れたリンクを全て修正
   - Footer.astroのjoinPath関数インポート追加

6. **Google Analytics動作確認**
   - 全19ページ（index、about-ceo、privacy-policy、news関連15ページ、company）にGA4タグを確認
   - 各ページに4つのgtag関連記述が含まれることを確認
   - 正しいフォーマットで出力されることを確認

---

**最終更新**: 2025年1月19日  
**バージョン**: v2.5.0  
**主要機能**: Google Analytics導入、GitHub Pagesデプロイ設定、プライバシーポリシー対応  
**最新コミット**: 38c53c2
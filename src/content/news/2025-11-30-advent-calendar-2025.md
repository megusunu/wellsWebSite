---
title: "1人アドベントカレンダー2025 — エンジニア×ハンドメイドの25日間"
description: "システム開発とハンドメイド、ひとり会社の運営など、25日間毎日記事を書く挑戦。技術とものづくりの両方を楽しむエンジニアの視点でお届けします。"
date: 2025-11-30
category: blog
tags: ["アドベントカレンダー", "エンジニア", "ハンドメイド", "ひとり会社", "Zenn"]
author: "草間 恵"
featured: true
draft: false
---

## 1人アドベントカレンダー2025

12月1日から25日まで、毎日1記事を書く挑戦をしています。

テーマは「**エンジニア×ハンドメイドのひとり会社**」。システム開発の技術ネタから、ハンドメイド副業の裏側、ひとり会社の運営まで、幅広いテーマで書いていきます。

<style>
.advent-calendar {
  --advent-green: #2d5a3d;
  --advent-red: #c44536;
  --advent-gold: #d4a84b;
  --advent-cream: #faf8f5;
  --advent-brown: #5c4033;
  font-family: 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif;
}

.advent-header {
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: linear-gradient(135deg, var(--advent-green) 0%, #1a3d2a 100%);
  border-radius: 12px;
  color: white;
  position: relative;
  overflow: hidden;
}

.advent-header::before {
  content: '❄';
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 1.5rem;
  opacity: 0.3;
}

.advent-header::after {
  content: '❄';
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 1.2rem;
  opacity: 0.3;
}

.advent-header h3 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.advent-header p {
  margin: 0.75rem 0 0 !important;
  font-size: 1.05rem !important;
  font-weight: 600 !important;
  color: #d4b896 !important;
  letter-spacing: 0.12em !important;
}

.advent-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 4px;
}

.advent-weekday {
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.5rem 0;
  border-radius: 6px;
}

.advent-weekday.sun { background: #fce4e4; color: #c44536; }
.advent-weekday.sat { background: #e4ecfc; color: #3654c4; }
.advent-weekday.weekday { background: #f0f0f0; color: #666; }

.advent-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}

.advent-cell {
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
  overflow: visible;
  z-index: 1;
  min-height: 80px;
}

@media (min-width: 901px) {
  .advent-cell {
    aspect-ratio: 1;
  }
}

.advent-cell.empty {
  background: transparent;
}

.advent-cell.pending {
  background: linear-gradient(145deg, #f5f5f5 0%, #e8e8e8 100%);
  border: 2px dashed #ccc;
  color: #999;
  cursor: default;
  pointer-events: none;
}

.advent-cell.pending .advent-day {
  color: #bbb;
}

.advent-cell.pending .advent-title {
  color: #aaa;
  font-size: 0.6rem;
}

.advent-cell.active {
  background: linear-gradient(145deg, var(--advent-cream) 0%, #f0ebe3 100%);
  border: 2px solid var(--advent-gold);
  color: var(--advent-brown);
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(212, 168, 75, 0.2);
  text-decoration: none !important;
}

.advent-cell.active:hover {
  box-shadow: 0 4px 12px rgba(212, 168, 75, 0.4);
  border-color: var(--advent-red);
  border-width: 3px;
}

.advent-cell.active::before {
  content: '🎄';
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 0.7rem;
  opacity: 0.6;
}

.advent-day {
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 4px;
}

.advent-cell.active .advent-day {
  color: var(--advent-red);
}

.advent-title {
  font-size: 0.55rem;
  text-align: center;
  line-height: 1.3;
  padding: 0 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-decoration: none !important;
}

a.advent-cell,
a.advent-cell:hover,
a.advent-cell .advent-title,
a.advent-cell .advent-day {
  text-decoration: none !important;
  border-bottom: none !important;
}

a.advent-cell.pending {
  border: 2px dashed #ccc !important;
  border-bottom: 2px dashed #ccc !important;
}

a.advent-cell.active {
  border: 2px solid var(--advent-gold) !important;
  border-bottom: 2px solid var(--advent-gold) !important;
}

a.advent-cell.active:hover {
  border: 3px solid var(--advent-red) !important;
  border-bottom: 3px solid var(--advent-red) !important;
}

.advent-legend {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
  font-size: 0.8rem;
}

.advent-legend-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.advent-legend-box {
  width: 16px;
  height: 16px;
  border-radius: 4px;
}

.advent-legend-box.active {
  background: linear-gradient(145deg, var(--advent-cream) 0%, #f0ebe3 100%);
  border: 2px solid var(--advent-gold);
}

.advent-legend-box.pending {
  background: #f5f5f5;
  border: 2px dashed #ccc;
}

@media (max-width: 900px) {
  .advent-calendar {
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    overflow: hidden !important;
    box-sizing: border-box !important;
  }
  .advent-header {
    padding: 0.5rem !important;
    border-radius: 8px !important;
    margin: 0 0 0.5rem 0 !important;
  }
  .advent-header h3 {
    font-size: 0.9rem !important;
  }
  .advent-header p {
    font-size: 0.7rem !important;
    letter-spacing: 0.03em !important;
  }
  .advent-header::before,
  .advent-header::after {
    display: none !important;
  }
  .advent-weekdays {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr) !important;
    gap: 2px !important;
    margin-bottom: 2px !important;
    width: 100% !important;
  }
  .advent-weekday {
    font-size: 0.6rem !important;
    padding: 0.3rem 0 !important;
    border-radius: 4px !important;
    min-width: 0 !important;
  }
  .advent-grid {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr) !important;
    gap: 2px !important;
    width: 100% !important;
  }
  .advent-cell {
    min-height: 36px !important;
    min-width: 0 !important;
    aspect-ratio: auto !important;
    border-radius: 4px !important;
    padding: 6px 2px !important;
    overflow: hidden !important;
  }
  .advent-cell.pending,
  .advent-cell.active {
    border-width: 1px !important;
  }
  .advent-cell.active::before {
    display: none !important;
  }
  .advent-day {
    font-size: 1.1rem !important;
    font-weight: 700 !important;
    margin-bottom: 0 !important;
  }
  .advent-title {
    display: block !important;
    font-size: 0.4rem !important;
    line-height: 1.1 !important;
    -webkit-line-clamp: 1 !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    max-width: 100% !important;
  }
  .advent-legend {
    gap: 0.75rem !important;
    margin-top: 0.5rem !important;
    font-size: 0.65rem !important;
  }
  .advent-legend-box {
    width: 10px !important;
    height: 10px !important;
    border-width: 1px !important;
  }
}
</style>

<div class="advent-calendar">
  <div class="advent-header">
    <h3>🎄 Advent Calendar 2025 🎄</h3>
    <p>エンジニア × ハンドメイド × ひとり会社</p>
  </div>

  <div class="advent-weekdays">
    <div class="advent-weekday sun">日</div>
    <div class="advent-weekday weekday">月</div>
    <div class="advent-weekday weekday">火</div>
    <div class="advent-weekday weekday">水</div>
    <div class="advent-weekday weekday">木</div>
    <div class="advent-weekday weekday">金</div>
    <div class="advent-weekday sat">土</div>
  </div>

  <div class="advent-grid">
    <div class="advent-cell empty"></div>
    <a href="https://zenn.dev/megusunu/articles/20251201-handmade-mind/" class="advent-cell active">
      <span class="advent-day">1</span>
      <span class="advent-title">採算度外視で始めたハンドメイド作家が、心のセーフティネットになった話</span>
    </a>
    <a href="https://zenn.dev/megusunu/articles/20251202-strengthsfinder-16years/" class="advent-cell active">
      <span class="advent-day">2</span>
      <span class="advent-title">慎重さ32位のSEが18年生き残れた理由——そしてAI時代に有利かもしれない話</span>
    </a>
    <a href="https://zenn.dev/megusunu/articles/20251203-cookie-size-limit/" class="advent-cell active">
      <span class="advent-day">3</span>
      <span class="advent-title">Cookieサイズ制限4096バイトとの戦い——認証トークン保存とnginx設定の最適化</span>
    </a>
    <a href="https://zenn.dev/megusunu/articles/20251204-pet-knitwear/" class="advent-cell active">
      <span class="advent-day">4</span>
      <span class="advent-title">エンジニアがペット用ニットウェアを作り始めた理由——編み物ビジネス試行錯誤の記録</span>
    </a>
    <a href="https://zenn.dev/megusunu/articles/20251205-ai-coaching-solo-company/" class="advent-cell active">
      <span class="advent-day">5</span>
      <span class="advent-title">AIに壁打ちしたら、ひとり会社の運営が楽になった話</span>
    </a>
    <a href="https://zenn.dev/megusunu/articles/20251206-gishohaku-special-printing" class="advent-cell active">
      <span class="advent-day">6</span>
      <span class="advent-title">技術同人誌×特殊印刷──懇親会から始まった思考実験</span>
    </a>
    <a href="https://zenn.dev/megusunu/articles/20251207-handmade-revenue" class="advent-cell active">
      <span class="advent-day">7</span>
      <span class="advent-title">ハンドメイド副業で月5万円を目指したけど届かなかった話（数字と失敗を全部出す）</span>
    </a>
    <a href="https://zenn.dev/megusunu/articles/20251208-ecs-fargate-scaling" class="advent-cell active">
      <span class="advent-day">8</span>
      <span class="advent-title">CPUが上がらないのに詰まる？──ECS Fargate×Quarkusで遭遇したスケーリングの落とし穴と対処法</span>
    </a>
    <div class="advent-cell pending">
      <span class="advent-day">9</span>
      <span class="advent-title">Leafletコンビニ分布マップ</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">10</span>
      <span class="advent-title">WordPress+ChatGPT受注システム</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">11</span>
      <span class="advent-title">AIコミットメッセージ</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">12</span>
      <span class="advent-title">技術書典と技書博の振り返り</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">13</span>
      <span class="advent-title">子供向けワークショップ</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">14</span>
      <span class="advent-title">アクリルたわし200個</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">15</span>
      <span class="advent-title">DynamoDB設計の失敗</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">16</span>
      <span class="advent-title">Mutinyパフォーマンス問題</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">17</span>
      <span class="advent-title">DynamoDB暗号化(KMS)</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">18</span>
      <span class="advent-title">DynamoDB begins_with</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">19</span>
      <span class="advent-title">CloudShell 30分制限</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">20</span>
      <span class="advent-title">AIで会社HP1年運用</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">21</span>
      <span class="advent-title">Upsider資金管理</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">22</span>
      <span class="advent-title">LINE BOT本を改訂</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">23</span>
      <span class="advent-title">Affinityで手芸本</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">24</span>
      <span class="advent-title">『続けない』技術</span>
    </div>
    <div class="advent-cell pending">
      <span class="advent-day">25</span>
      <span class="advent-title">2026年への招待状</span>
    </div>
    <div class="advent-cell empty"></div>
    <div class="advent-cell empty"></div>
  </div>

  <div class="advent-legend">
    <div class="advent-legend-item">
      <div class="advent-legend-box active"></div>
      <span>公開済み</span>
    </div>
    <div class="advent-legend-item">
      <div class="advent-legend-box pending"></div>
      <span>準備中</span>
    </div>
  </div>
</div>

*記事が公開され次第、リンクを追加していきます。*

---

## この挑戦について

### きっかけ

「毎日書く」という行為に対して、ずっと苦手意識がありました。でも今年は、ハンドメイドイベントへの出展や技術書の執筆を通じて、**アウトプットの習慣**が少しずつ身についてきた実感があります。

だったら、この勢いで25日間チャレンジしてみようと。

### テーマの幅

- **技術系**: AWS、DynamoDB、nginx、Cookie、Leaflet など
- **ハンドメイド系**: ペット用ニット、ワークショップ運営、イベント出展
- **ひとり会社系**: 資金管理、AI活用、会社運営の工夫

「エンジニアだけど編み物もする」「技術書も書くしハンドメイドも売る」——そんな変わった働き方の一端を、25日間かけてお伝えできればと思います。

### 記事の公開場所

すべての記事は **[Zenn](https://zenn.dev/megusunu)** で公開しています。

---

## 関連リンク

- [Zenn アドベントカレンダー記事](https://zenn.dev/megusunu/articles/20251130-advent-calendar-2025)
- [Instagram @megusunu](https://www.instagram.com/megusunu/)
- [X (Twitter) @megusunu](https://x.com/megusunu)

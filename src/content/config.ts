import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum([
      'news',        // 純粋なニュース・お知らせ
      'blog',        // コラム・技術記事
      'project',     // プロジェクト報告・事例
      'event',       // イベント・ワークショップ
      'update'       // サービス更新・機能追加
    ]),
    tags: z.array(z.string()).optional(),
    author: z.enum(['草間 恵', 'Wells合同会社']).default('Wells合同会社'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'news': newsCollection,
};
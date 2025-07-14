// GitHub Pages用のパスヘルパー
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // 先頭のスラッシュを削除してから結合
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? base + cleanPath : base + '/' + cleanPath;
}

// 適切なベースURLを取得
export function getBaseUrl(): string {
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? base : base + '/';
}
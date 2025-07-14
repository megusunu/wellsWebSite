// GitHub Pages用のパスヘルパー
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // 先頭のスラッシュを削除してから結合
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? base + cleanPath : base + '/' + cleanPath;
}

// 適切なベースURLを取得（末尾にスラッシュ付き）
export function getBaseUrl(): string {
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? base : base + '/';
}

// パスを正しく結合（ダブルスラッシュを避ける）
export function joinPath(basePath: string, ...paths: string[]): string {
  const base = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
  const segments = paths.map(path => {
    // 先頭と末尾のスラッシュを削除
    return path.replace(/^\/+|\/+$/g, '');
  }).filter(segment => segment.length > 0);
  
  if (segments.length === 0) {
    return base + '/';
  }
  
  return base + '/' + segments.join('/') + '/';
}
export type DomainDescriptor = {
  slug: string;
  title: string;
  summary: string;
  tagline: string;
};

export const DOMAIN_DESCRIPTORS: DomainDescriptor[] = [
  {
    slug: 'marketing',
    title: 'マーケティング',
    summary: 'キャンペーン計画やリードスコアリング、オーディエンス分析を担当するモジュールです。',
    tagline: 'データに裏付けされた施策で適切な顧客にリーチし、コンバージョンを最大化します。',
  },
  {
    slug: 'accounts',
    title: 'アカウント',
    summary: 'アカウントのプロビジョニング、プラン管理、請求状況の可視化を担います。',
    tagline: 'カスタマーサクセスが各顧客の全体像を把握できる基盤を提供します。',
  },
  {
    slug: 'support',
    title: 'サポート',
    summary: 'ナレッジベース、多チャネルでの問い合わせ振り分け、SLA 分析を提供します。',
    tagline: '顧客がどこから連絡しても迅速に課題を解決できる支援体制を整えます。',
  },
];

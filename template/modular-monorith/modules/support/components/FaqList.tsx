const FAQS = [
  {
    question: 'ナレッジベースの記事を公開するにはどうすればよいですか？',
    answer:
      '共同編集で原稿を作成し、技術レビューを依頼して、バージョン履歴付きで同じワークフローから公開できます。',
  },
  {
    question: 'SLA ごとにチケットへ優先度を付けられますか？',
    answer:
      'はい。すべてのチャネルからチケットを取り込み、応答／解決目標に基づいてスコアリングされたキューに自動振り分けできます。',
  },
  {
    question: 'サポート担当者のオンボーディングはどのように行われますか？',
    answer:
      'コンソール内でガイド付きシナリオや録画を提供し、過去の解決済み会話から新しいメンバーが学べるようにします。',
  },
];

export function FaqList() {
  return (
    <div className="accordion">
      {FAQS.map((faq) => (
        <details key={faq.question} className="accordion__item">
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

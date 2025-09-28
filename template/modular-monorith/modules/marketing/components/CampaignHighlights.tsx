const HIGHLIGHTS = [
  {
    title: 'Multi-channel orchestration',
    description:
      'Coordinate email, paid, and in-app campaigns with a unified brief and rollup analytics.',
  },
  {
    title: 'Audience intelligence',
    description:
      'Segment leads by intent signals and automatically sync the highest scoring cohorts to sales.',
  },
  {
    title: 'Experiment cadence',
    description:
      'Keep every launch accountable with hypothesis tracking, success metrics, and scheduled retros.',
  },
];

export function CampaignHighlights() {
  return (
    <div className="card-grid">
      {HIGHLIGHTS.map((item) => (
        <article key={item.title} className="card">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

const STAGES = [
  {
    name: 'Discover',
    detail: 'Connect enrichment data sources to reveal anonymous traffic and campaign lift.',
  },
  {
    name: 'Engage',
    detail: 'Personalize nurture streams with behavioral triggers and adaptive content blocks.',
  },
  {
    name: 'Hand off',
    detail: 'Push sales-ready leads with full context into CRM playbooks for rapid follow-up.',
  },
];

export function LeadLifecycle() {
  return (
    <ol className="timeline">
      {STAGES.map((stage) => (
        <li key={stage.name} className="timeline__item">
          <h3>{stage.name}</h3>
          <p>{stage.detail}</p>
        </li>
      ))}
    </ol>
  );
}

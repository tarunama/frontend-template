const FORECAST = [
  {
    quarter: 'Q3',
    renewals: 18,
    expansion: '$86k',
  },
  {
    quarter: 'Q4',
    renewals: 22,
    expansion: '$112k',
  },
  {
    quarter: 'Q1',
    renewals: 19,
    expansion: '$74k',
  },
];

export function RenewalForecast() {
  return (
    <div className="card">
      <h2>Renewal forecast</h2>
      <ul className="bullet-list">
        {FORECAST.map((item) => (
          <li key={item.quarter}>
            <strong>{item.quarter}</strong>: {item.renewals} renewals · {item.expansion} expansion
          </li>
        ))}
      </ul>
    </div>
  );
}

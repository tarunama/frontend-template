const ACCOUNTS = [
  {
    company: 'Acme Hardware',
    plan: 'Enterprise',
    seats: 145,
    health: 'Green',
  },
  {
    company: 'Northwind Logistics',
    plan: 'Growth',
    seats: 62,
    health: 'Yellow',
  },
  {
    company: 'Globex Media',
    plan: 'Starter',
    seats: 18,
    health: 'Green',
  },
];

export function AccountSnapshot() {
  return (
    <div className="table">
      <div className="table__head">
        <span>Company</span>
        <span>Plan</span>
        <span>Seats</span>
        <span>Health</span>
      </div>
      {ACCOUNTS.map((account) => (
        <div key={account.company} className="table__row">
          <span>{account.company}</span>
          <span>{account.plan}</span>
          <span>{account.seats}</span>
          <span>{account.health}</span>
        </div>
      ))}
    </div>
  );
}

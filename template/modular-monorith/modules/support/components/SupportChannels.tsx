const CHANNELS = [
  {
    name: 'Chat & Messaging',
    description: 'Real-time handoffs between bots and agents with sentiment tagging.',
  },
  {
    name: 'Email',
    description: 'Automated triage that groups related threads and suggests replies.',
  },
  {
    name: 'Voice',
    description: 'Cloud telephony with call transcription and in-call guidance cards.',
  },
];

export function SupportChannels() {
  return (
    <div className="card-grid">
      {CHANNELS.map((channel) => (
        <article key={channel.name} className="card">
          <h2>{channel.name}</h2>
          <p>{channel.description}</p>
        </article>
      ))}
    </div>
  );
}

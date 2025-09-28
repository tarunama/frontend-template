const FAQS = [
  {
    question: 'How do I publish new knowledge base articles?',
    answer:
      'Draft content collaboratively, request technical review, and publish with version history in a single workflow.',
  },
  {
    question: 'Can I prioritize tickets by SLAs?',
    answer:
      'Yes. Ingest tickets from every channel and route them through queues scored by response and resolution targets.',
  },
  {
    question: 'How are agents onboarded?',
    answer:
      'Provide guided scenarios and recordings inside the console so new teammates learn from resolved conversations.',
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

import Link from 'next/link';

import { DOMAIN_DESCRIPTORS } from '@/modules/domains/config';

export default function Home() {
  return (
    <main className="home">
      <header className="home__hero">
        <p className="home__eyebrow">Modular monolith</p>
        <h1>Domain modules that grow together</h1>
        <p className="home__lede">
          Explore how marketing, accounts, and support modules can live in a single Next.js
          repository while keeping clear ownership boundaries.
        </p>
      </header>
      <section className="home__domains">
        {DOMAIN_DESCRIPTORS.map((domain) => (
          <article key={domain.slug} className="home__domain-card">
            <p className="home__domain-eyebrow">/{domain.slug}</p>
            <h2>{domain.title}</h2>
            <p>{domain.summary}</p>
            <p className="home__domain-tagline">{domain.tagline}</p>
            <Link className="home__domain-link" href={`/${domain.slug}`}>
              View module →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

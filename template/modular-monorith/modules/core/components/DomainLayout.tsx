import Link from 'next/link';
import { ReactNode } from 'react';

export type DomainLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function DomainLayout({ title, description, children }: DomainLayoutProps) {
  return (
    <main className="domain">
      <header className="domain__header">
        <div>
          <p className="domain__eyebrow">Domain module</p>
          <h1>{title}</h1>
          <p className="domain__description">{description}</p>
        </div>
        <Link className="domain__back-link" href="/">
          ← Back to overview
        </Link>
      </header>
      <section className="domain__content">{children}</section>
    </main>
  );
}

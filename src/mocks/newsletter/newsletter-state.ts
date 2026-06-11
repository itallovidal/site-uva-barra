import type { NewsletterEmail, Newsletter } from '@/domain/entities';

const newsletterEmails = new Map<string, NewsletterEmail>();
const newsletterEmailList: NewsletterEmail[] = [];

const newsletterList: Newsletter[] = [
  {
    id: 'newsletter-1',
    content: 'Conteúdo da newsletter de exemplo',
    createdAt: '2026-06-10T10:00:00.000Z',
    updatedAt: '2026-06-10T10:00:00.000Z',
  },
];

let nextId = 2;

function generateNewsletterId(): string {
  return `newsletter-${nextId++}`;
}

export { newsletterEmails, newsletterEmailList, newsletterList, generateNewsletterId };

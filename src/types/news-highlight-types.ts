interface NewsHighlight {
  id: string;
  imageUrl: string;
  category: string;
  title: string;
  summary: string;
  author?: string;
  publishedAt?: string;
}

export type { NewsHighlight };

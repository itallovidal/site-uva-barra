interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl?: string;
  category: 'Redação' | 'Criação' | 'Desenvolvimento';
}

export type { TeamMember };

const ROLES = ['desenvolvedor', 'design', 'redator', 'pesquisador'] as const;

type Role = (typeof ROLES)[number];

interface RequestLoginDTO {
  email: string;
  password: string;
}

interface RequestSignupDTO {
  email: string;
  name: string;
  password: string;
  role: Role;
}

export { ROLES };
export type { Role, RequestLoginDTO, RequestSignupDTO };

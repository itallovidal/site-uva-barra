export const UserRole = {
  COLLABORATOR: 'collaborator',
  ADMIN: 'admin',
} as const;

export const UserProfession = {
  DESIGNER: 'designer',
  REDATOR: 'redator',
  DESENVOLVEDOR: 'desenvolvedor',
  SOCIAL_MEDIA: 'social_media',
  EDITOR_CHEFE: 'editor_chefe',
  OUTRO: 'outro',
} as const;

export const NewsStatus = {
  DRAFT: 'draft',
  REVIEW: 'review',
  PUBLISHED: 'published',
  ARCHIVED: 'archived',
} as const;

export const UserStatus = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending',
} as const;

export type UserRoleType = typeof UserRole[keyof typeof UserRole];
export type UserProfessionType = typeof UserProfession[keyof typeof UserProfession];
export type NewsStatusType = typeof NewsStatus[keyof typeof NewsStatus];
export type UserStatusType = typeof UserStatus[keyof typeof UserStatus];

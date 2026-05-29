import { NewsStatus } from './constants';
import type {
  UserRoleType,
  UserProfessionType,
  NewsStatusType,
  UserStatusType,
} from './constants';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatarUrl?: string | null;
  role: UserRoleType;
  profession: UserProfessionType;
  bio?: string | null;
  status: UserStatusType;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description?: string | null;
  createdAt: Date;
}

export interface News {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  coverImageUrl?: string | null;
  categoryId: string;
  authorId: string;
  status: NewsStatusType;
  tags: string[];
  featured: boolean;
  readingTime: number | null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date | null;
}

export interface NewsRequestDTO {
  title: string;
  summary: string;
  content: string;
  categoryId: string;
  tagIds: string[];
  coverImageUrl?: string | null;
  status?: typeof NewsStatus.DRAFT | typeof NewsStatus.REVIEW;
  featured?: boolean;
  readingTime?: number | null;
}

export interface UserRequestDTO {
  name: string;
  email: string;
  password: string;
  profession: UserProfessionType;
  role?: UserRoleType;
  bio?: string | null;
}

export interface RequestLoginDTO {
  email: string;
  password: string;
}

export interface NewsPreviewDTO {
  id: string;
  title: string;
  summary: string;
  coverImageUrl: string | null;
  categoryName: string;
  tags: Array<{ id: string; name: string; slug: string }>;
  featured: boolean;
  readingTime: number | null;
  publishedAt: Date | null;
  authorName: string;
}

export interface NewsModerationItemDTO {
  id: string;
  title: string;
  summary: string;
  content: string;
  coverImageUrl: string | null;
  categoryName: string;
  authorName: string;
  status: NewsStatusType;
  updatedAt: Date;
}

export interface NewsReviewRequestDTO {
  comment: string;
}

export interface UserProfileDTO {
  id: string;
  name: string;
  avatarUrl: string | null;
  profession: UserProfessionType;
  bio: string | null;
}

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
  tags: string[];
}

export interface News {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  coverImageUrl: string;
  category: string;
  author: string;
  status: NewsStatusType;
  tags: string[];
  featured: boolean;
  readingTime: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date | null;
}

export interface CreateNewsDTO {
  title: string;
  summary: string;
  content: string;
  coverImageUrl: string;
  category: string;
  tags: string[];
  featured: boolean;
  status: NewsStatusType;
  slug?: string;
  author: string;
}

export interface CreateCategoryRequestDTO {
  name: string;
  tags?: string[];
}

export interface UpdateCategoryRequestDTO {
  name: string;
  tags: string[];
}

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  profession: UserProfessionType;
  bio?: string | null;
  role?: UserRoleType;
}

export interface TokenPayloadDTO {
  sub: string;
  email: string;
  role: string;
}

export interface RequestLoginDTO {
  email: string;
  password: string;
}

export interface LoginResponseData {
  accessToken: string;
  user: Omit<User, 'password'>;
}

export interface NewsPreviewDTO {
  id: string;
  title: string;
  summary: string;
  coverImageUrl: string;
  category: string;
  tags: string[];
  featured: boolean;
  readingTime: number;
  publishedAt: Date | null;
  author: string;
}

export interface NewsModerationItemDTO {
  id: string;
  title: string;
  summary: string;
  content: string;
  coverImageUrl: string | null;
  category: string;
  author: string;
  status: NewsStatusType;
  updatedAt: Date;
}

export interface AdminNewsCardDTO {
  id: string;
  title: string;
  summary: string;
  content: string;
  coverImageUrl: string | null;
  category: string;
  author: string;
  status: NewsStatusType;
  updatedAt: Date;
  publishedAt?: Date | null;
}

export interface NewsReviewRequestDTO {
  comment: string;
}

export interface UserProfileDTO {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  profession: UserProfessionType;
  role: UserRoleType;
  bio: string | null;
}

export interface NewsletterEmail {
  email: string;
  registeredAt: string;
}

export interface Newsletter {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNewsletterDTO {
  content: string;
}

export interface UpdateNewsletterDTO {
  content: string;
}

import { loginHandler } from './user/login';
import { createUserHandler } from './user/create-user';
import { getUserByIdHandler } from './user/get-user-by-id';
import { getUserByEmailHandler } from './user/get-user-by-email';
import { updateUserHandler } from './user/update-user';
import { deleteUserHandler } from './user/delete-user';
import { getHealthHandler } from './health/get-health';
import { getLatestNewsHandler } from './news/get-latest-news';
import { getLatestNewsByCategoryHandler, getNewsQueryAliasHandler } from './news/get-latest-news-by-category';
import { getNewsByIdHandler } from './news/get-news-by-id';
import { getNewsBySlugHandler } from './news/get-news-by-slug';
import { createNewsHandler } from './news/create-news';
import { updateNewsHandler } from './news/update-news';
import { deleteNewsHandler } from './news/delete-news';
import { getCollaboratorsHandler } from './collaborators/get-collaborators';
import { getCollaboratorRequestsHandler } from './collaborators/get-collaborator-requests';
import { approveCollaboratorHandler } from './collaborators/approve-collaborator';
import { deleteCollaboratorHandler } from './collaborators/delete-collaborator';
import { getCategoriesHandler } from './categories/get-categories';
import { createCategoryHandler } from './categories/create-category';
import { getCategoryByIdHandler } from './categories/get-category-by-id';
import { updateCategoryHandler } from './categories/update-category';
import { deleteCategoryHandler } from './categories/delete-category';
import { getTagsHandler } from './categories/get-tags';

const handlers = [
  loginHandler,
  createUserHandler,
  getUserByIdHandler,
  getUserByEmailHandler,
  updateUserHandler,
  deleteUserHandler,
  getHealthHandler,
  getLatestNewsHandler,
  getLatestNewsByCategoryHandler,
  getNewsQueryAliasHandler,
  getNewsByIdHandler,
  getNewsBySlugHandler,
  createNewsHandler,
  updateNewsHandler,
  deleteNewsHandler,
  getCollaboratorsHandler,
  getCollaboratorRequestsHandler,
  approveCollaboratorHandler,
  deleteCollaboratorHandler,
  getCategoriesHandler,
  createCategoryHandler,
  getCategoryByIdHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
  getTagsHandler,
];

export { handlers };

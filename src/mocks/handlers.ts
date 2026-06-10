import { loginHandler } from './user/login';
import { createUserHandler } from './user/create-user';
import { getUserByIdHandler } from './user/get-user-by-id';
import { getUserByEmailHandler } from './user/get-user-by-email';
import { updateUserHandler } from './user/update-user';
import { deleteUserHandler } from './user/delete-user';
import { getHealthHandler } from './health/get-health';
import { getNewsByIdHandler } from './news/get-news-by-id';
import { getNewsBySlugHandler } from './news/get-news-by-slug';
import { createNewsHandler } from './news/create-news';
import { updateNewsHandler } from './news/update-news';
import { deleteNewsHandler } from './news/delete-news';
import { searchNewsHandler } from './news/search-news';
import { getNewsListingHandler, getNewsListingByCategoryHandler } from './news/get-news-listing';
import { listUsersHandler } from './user/list-users';
import { getCollaboratorsHandler } from './collaborators/get-collaborators';
import { deleteCollaboratorHandler } from './collaborators/delete-collaborator';
import { getRegistrationRequestsHandler } from './registration/get-registration-requests';
import { approveRegistrationHandler } from './registration/approve-registration';
import { rejectRegistrationHandler } from './registration/reject-registration';
import { createRegistrationHandler } from './registration/create-registration';
import { getCategoriesHandler } from './categories/get-categories';
import { createCategoryHandler } from './categories/create-category';
import { getCategoryByIdHandler } from './categories/get-category-by-id';
import { updateCategoryHandler } from './categories/update-category';
import { deleteCategoryHandler } from './categories/delete-category';
import { getTagsHandler } from './categories/get-tags';
import { newsletterRegisterHandler } from './newsletter/register';

const handlers = [
  loginHandler,
  createUserHandler,
  getUserByIdHandler,
  getUserByEmailHandler,
  updateUserHandler,
  deleteUserHandler,
  getHealthHandler,
  getNewsListingHandler,
  getNewsListingByCategoryHandler,
  searchNewsHandler,
  getNewsByIdHandler,
  getNewsBySlugHandler,
  createNewsHandler,
  updateNewsHandler,
  deleteNewsHandler,
  listUsersHandler,
  getCollaboratorsHandler,
  deleteCollaboratorHandler,
  getRegistrationRequestsHandler,
  approveRegistrationHandler,
  rejectRegistrationHandler,
  createRegistrationHandler,
  getCategoriesHandler,
  createCategoryHandler,
  getCategoryByIdHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
  getTagsHandler,
  newsletterRegisterHandler,
];

export { handlers };

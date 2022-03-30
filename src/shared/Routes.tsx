import { get } from 'lodash';

const ADMIN_PATH = '/admin/';

export enum Slugs {
  ID = 'id',
  REDIRECT = 'redirect',
  QUERY = 'query',
  ZIP_CODE = 'zip_code',
  CODE = 'code',
  DATE = 'date'
}

const SlugKeys = Object.keys(Slugs)
  .reduce<{ [key in keyof typeof Slugs]?: string }>((dict, curr) => ({
    ...dict,
    [curr]: `:${Slugs[curr]}?`
  }), {}
  );

export const AdminRoutes = {
  HOME: ADMIN_PATH,
  USERS: ADMIN_PATH + 'users',
  ADDRESSES: ADMIN_PATH + 'addresses',
  ADDRESS: ADMIN_PATH + 'address/:id',
  RATE_REQUESTS: ADMIN_PATH + 'rate-requests',
}

export const GeneralRoutes = {
  LOGIN_BASE: `/login`,
  DASHBOARD: `/dashboard`,
  ADDRESS_ENTRY: `/address-entry`,
  PENDING_VERIFICATION: `/pending-verification`,
  LOGIN: `/login/${SlugKeys.REDIRECT}`,
  REGISTER: `/register`,
  LOGOUT: `/logout/${SlugKeys.REDIRECT}`,
};

type EXTRA_SLUGS = { slug: string; value: (string | number | Date) }[];
export const getSluggedPath = (path: string, extraSlugs: EXTRA_SLUGS = []): string => {
  let basePath = path;

  for (const extraSlug of extraSlugs) {
    basePath = basePath.replace(`:${extraSlug.slug}`, `${extraSlug.value}`);
    basePath = basePath.replace(`:${extraSlug.slug}?`, `${extraSlug.value}`);
  }

  return basePath.replace(':' + Slugs.REDIRECT + '?', '');
};

const getProperUri = (matchUrl: string) => {
  return encodeURIComponent(decodeURIComponent(matchUrl).replace(/%2F/g, "/").replace("//", "/").replace("//", "/"));
}

export const getIdSluggedPath = (path: string, id: (string | number)): string => {
  return getSluggedPath(path, [{ slug: Slugs.ID, value: id }]);
};

export const getLoginRedirect = (match: any): string => {
  const uri = getProperUri(match.url.replace('/register', ''));
  return GeneralRoutes.LOGIN.replace(':' + Slugs.REDIRECT + '?', uri);
}

export const getLogoutRedirect = (match: any): string => {
  return GeneralRoutes.LOGOUT.replace(':' + Slugs.REDIRECT + '?', encodeURIComponent(match.url));
}

export const getSlug = (match: any, slug: string): string =>
  get(match, 'params.' + slug)

export const getIdSlug = (match: any): string =>
  get(match, 'params.' + Slugs.ID);

import Prismic from 'prismic-javascript';
import { Client } from './prismicHelpers';

async function fetchDocs(page = 1, routes = []) {
  const response = await Client().query('', { pageSize: 100, lang: '*', page });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes);
  }
  return [...new Set(allRoutes)];
}

/** Fetches all Prismic documents and filters them (eg. by document type).
 *  In production, you would probably query documents by type instead of filtering them.
 * */
export const queryRepeatableDocuments = async (filter) => {
  const allRoutes = await fetchDocs();
  return allRoutes.filter(filter);
};

export const homePageQuery = async () => {
  const allRoutes = await fetchDocs();
  return allRoutes.filter((doc) => doc.type === 'post').slice(0, 5);
};

/** Custom Query Henry */

export const getProjects = async (pagesize = 100, page = 1, ref) =>
  Client()
    .query(Prismic.Predicates.at('document.type', 'project'), {
      orderings: '[my.project.date]',
      pageSize: pagesize,
      page,
      ...(ref ? { ref } : null),
    })
    .then((project) => project);

export const getHome = async (ref) =>
  (await Client().getSingle('homepage', ref ? { ref } : null)) || {};

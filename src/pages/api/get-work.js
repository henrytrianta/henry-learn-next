import { Client } from '@/utils/prismicHelpers';
import Prismic from 'prismic-javascript';

// let previewData = {};
// const { ref } = previewData || {};

export default async (_, res) => {
  const client = Client();
  const projects = await client.query(Prismic.Predicates.at('document.type', 'project'), {
    orderings: '[my.project.date desc]',
    pageSize: 4
    //   ...(ref ? { ref } : null)
  });

  res.json({ project: projects });
};

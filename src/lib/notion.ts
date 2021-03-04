import get from 'axios';

const { NOTION_BLOG_ID } = process.env;

export type Post = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tag: string[];
  published: boolean;
};

export const getAllPosts = async (): Promise<Post[]> =>
  get(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`).then(
    (res) => res.data,
  );

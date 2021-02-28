import { get } from 'axios';

const { NOTION_BLOG_ID } = process.env;

export const getAllPosts = async () =>
  get(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`).then(
    (res) => res.data,
  );

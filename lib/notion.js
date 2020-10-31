import { get } from 'axios';

const NOTION_BLOG_ID = process.env.NOTION_BLOG_ID;

export const getAllPosts = async () => {
  return await get(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`).then(
    (res) => res.data
  );
};

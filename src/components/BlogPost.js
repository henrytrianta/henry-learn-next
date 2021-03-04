import { NotionRenderer } from 'react-notion';
// Theming
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting

const BlogPost = ({ blocks }) => (
  <>
    <NotionRenderer blockMap={blocks} />
  </>
);

export default BlogPost;

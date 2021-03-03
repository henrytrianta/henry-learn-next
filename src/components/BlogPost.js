import { NotionRenderer } from 'react-notion';
// Theming
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting

const BlogPost = ({ blocks }) => (
  <div className="container mx-auto">
    <NotionRenderer blockMap={blocks} />
  </div>
);

export default BlogPost;

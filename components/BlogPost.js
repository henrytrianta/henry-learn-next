import { NotionRenderer, BlockMapType } from 'react-notion';
// Theming
import { Container } from '@chakra-ui/core';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting

const BlogPost = ({ blocks }) => {
  return (
    <Container maxW="lg">
      <NotionRenderer blockMap={blocks} />
    </Container>
  );
};

export default BlogPost;

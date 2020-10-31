import { NotionRenderer, BlockMapType } from 'react-notion';
// Theming
import { Container } from '@chakra-ui/core';

const BlogPost = ({ blocks }) => {
  return (
    <Container maxW="lg">
      <NotionRenderer blockMap={blocks} />
    </Container>
  );
};

export default BlogPost;

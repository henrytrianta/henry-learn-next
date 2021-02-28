import NextLink from 'next/link';
import {
  Container,
  Link,
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Badge,
} from '@chakra-ui/react';

const BlogPosts = ({ posts }) => (
  <Container>
    <Stack>
      {posts.map(
        (post) =>
          post.published && (
            <NextLink href={`blog/${post.slug}`} passHref>
              <Link w="100%" _hover={{ textDecoration: 'none' }}>
                <Box mb={8} display="block" width="100%">
                  <Flex
                    width="100%"
                    align="flex-start"
                    justifyContent="space-between"
                    flexDirection={['column', 'row']}
                  >
                    <Heading size="md" as="h3" mb={2} fontWeight="medium">
                      {post.title}
                    </Heading>
                    <Box>
                      {post.tag.map((tag) => (
                        <Badge
                          colorScheme="palletGold"
                          textAlign={['left', 'right']}
                          mb={[4, 0]}
                          mr="2"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </Box>
                  </Flex>
                  <Text>{post.excerpt}</Text>
                </Box>
              </Link>
            </NextLink>
          ),
      )}
    </Stack>
  </Container>
);

export default BlogPosts;

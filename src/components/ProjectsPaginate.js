import { Box, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import ReactPaginate from 'react-paginate';
import styles from '@/components/CSSModule/Pagination.module.scss';

import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

// Style chakra ui, button pagination
const ButtonPagination = {
  border: '1px solid black',
  borderRadius: '50%',
  w: '20px',
  h: '20px',
  d: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  _hover: {
    bg: 'palletBlue',
    color: 'palletGoldHard'
  },
  fontSize: '16px'
};

const ProjectsPaginate = ({ totalpages, page }) => {
  const router = useRouter();
  return (
    <ReactPaginate
      previousLabel={
        <Box sx={ButtonPagination}>
          <Icon as={RiArrowLeftSLine} />
        </Box>
      }
      nextLabel={
        <Box sx={ButtonPagination}>
          <Icon as={RiArrowRightSLine} />
        </Box>
      }
      breakLabel={'...'}
      breakClassName={'break-me'}
      activeClassName={styles.active}
      containerClassName={styles.pagination}
      disabledClassName={styles.disabled}
      pageCount={totalpages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      forcePage={page}
      onPageChange={(page) => router.push('/works/' + (page.selected + 1))}
      disableInitialCallback={true}
    />
  );
};

export default ProjectsPaginate;

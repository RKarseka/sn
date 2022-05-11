import ReactPaginate from 'react-paginate';
import styles from './friends.module.scss';

export const Pagination = ({ ...props }) => {
  return (
    <>
      <PaginationC
        breakLabel={'...'}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        style={styles.pagination}
        {...props}
      />
      <PaginationC
        breakLabel={false}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        style={styles.paginationMini}
        {...props}
      />
    </>
  );
};

const PaginationC = ({ totalPages, page, style, ...props }) => {
  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };

  return (
    <ReactPaginate
      previousLabel={'«'}
      nextLabel={'»'}
      pageCount={totalPages}
      onPageChange={handlePageClick}
      forcePage={page - 1}
      disableInitialCallback={true}
      containerClassName={`${style} pagination  justify-content-center`}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
      {...props}
    />
  );
};

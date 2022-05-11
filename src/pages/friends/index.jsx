import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Friend } from '../../components/friend';
import { axiosGet } from '../../utils/axios';
import styles from './friends.module.scss';
import { DropdownMenu } from './dropdown';
import { Form } from 'react-bootstrap';

export const Friends = ({ pageSize, setPageSize }) => {
  // const [page, setPage] = useState(Math.ceil(18290 / pageSize));

  const startPage = 1;
  const [page, setPage] = useState(startPage);

  // const [totalPagesCount, setTotalPagesCount] = useState(page + 1);
  const [totalPages, setTotalPages] = useState(page);

  const [friends, setFriends] = useState([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    (async () => {
      try {
        await axiosGet(
          `/users?page=${page}&count=${pageSize}&term=${search}`
        ).then((data) => {
          setTotalPages(Math.ceil(data.totalCount / pageSize) || 1);
          if (
            page <= Math.ceil(data.totalCount / pageSize) ||
            data.totalCount === 0
          )
            setFriends(data.items);
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page, pageSize, search]);

  page > totalPages && setPage(totalPages);

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <Form.Control
          type="text"
          aria-describedby="search users"
          size="sm"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Form.Check disabled type="switch" label="followed" />

        <div className={styles.drop}>
          Friends on page:
          <DropdownMenu pageSize={pageSize} setPageSize={setPageSize} />
        </div>
      </div>

      <ReactPaginate
        previousLabel={'«'}
        nextLabel={'»'}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        forcePage={page - 1}
        disableInitialCallback={true}
        containerClassName={'pagination pagination-secondary'}
        pageClassName={'page-item pagination-secondary'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link secondary'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />

      <div className={styles.container}>
        {friends.map((item) => (
          <Friend key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

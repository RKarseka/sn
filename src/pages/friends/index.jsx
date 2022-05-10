import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Friend } from '../../components/friend';
import { axiosGet } from '../../utils/axios';
import styles from './friends.module.scss';
import pagination from '../../scss/paginatin.module.scss';

export const Friends = ({ users, setFriends }) => {
  const [page, setPage] = useState(1829);
  const [totalPagesCount, setTotalPagesCount] = useState(page + 1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    (async () => {
      try {
        await axiosGet(`/users?page=${page}`).then((data) => {
          setFriends(data.items);
          setTotalPagesCount(Math.ceil(data.totalCount / pageSize));
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };

  return (
    <section className={styles.wrapper}>
      {`Friends, page ${page}`}

      <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={totalPagesCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        initialPage={page}
        containerClassName={pagination.wrapper}
        pageClassName={pagination.item}
        previousClassName={pagination.item}
        breakClassName={pagination.item}
        nextClassName={pagination.item}
        activeClassName={pagination.active}
      />

      <div className={styles.container}>
        {users.map((item) => (
          <Friend key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

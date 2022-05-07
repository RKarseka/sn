import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Friend } from '../../components/friend';
import { Pagination } from '../../components/pagination';
import { axiosGet } from '../../utils/axios';
import styles from './friends.module.scss';

export const Friends = ({ users, setFriends }) => {
  const [page, setPage] = useState(1829);
  const [totalPagesCount, setTotalPagesCount] = useState(0);
  // console.log('render');

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };

  const onClick = (data) => {
    console.log(data);
  };

  useEffect(() => {
    (async () => {
      try {
        await axiosGet(`/users?page=${page}`).then((data) => {
          setFriends(data.items);
          setTotalPagesCount(data.totalCount);
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);
  return (
    <section className={styles.wrapper}>
      {`Friends, page ${page}`}
      {/* <Pagination page={page} changePage={setPage} maxPages={totalPagesCount} /> */}

      <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={totalPagesCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        // onPageActive={onClick}
      />

      <div className={styles.container}>
        {users.map((item) => (
          <Friend key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

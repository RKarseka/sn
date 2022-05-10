import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Friend } from '../../components/friend';
import { axiosGet } from '../../utils/axios';
import styles from './friends.module.scss';
import pagination from '../../scss/paginatin.module.scss';
import { DropdownMenu } from './dropdown';

export const Friends = ({ pageSize, setPageSize }) => {
  // const [page, setPage] = useState(Math.ceil(18290 / pageSize));

  const startPage = 171;
  const [page, setPage] = useState(startPage);

  // const [totalPagesCount, setTotalPagesCount] = useState(page + 1);
  const [totalPages, setTotalPages] = useState(page);

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        await axiosGet(`/users?page=${page}&count=${pageSize}`).then((data) => {
          setTotalPages(Math.ceil(data.totalCount / pageSize));
          if (page <= Math.ceil(data.totalCount / pageSize))
            setFriends(data.items);
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page, pageSize]);

  page > totalPages && setPage(totalPages);

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };

  return (
    <section className={styles.wrapper}>
      {`Friends, page ${page}`}
      <div className="">
        Friends on page:
        <DropdownMenu pageSize={pageSize} setPageSize={setPageSize} />
      </div>

      <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        forcePage={page - 1}
        containerClassName={pagination.wrapper}
        pageClassName={pagination.item}
        previousClassName={pagination.item}
        breakClassName={pagination.item}
        nextClassName={pagination.item}
        activeClassName={pagination.active}
      />

      <div className={styles.container}>
        {friends.map((item) => (
          <Friend key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

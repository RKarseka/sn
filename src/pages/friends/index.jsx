import { useEffect, useState } from 'react';
import { Friend } from '../../components/friend';
import { axiosGet } from '../../utils/axios';
import styles from './friends.module.scss';
import { DropdownMenu } from './dropdown';
import { Form } from 'react-bootstrap';
import { Pagination } from './pagination';

export const Friends = ({ pageSize, setPageSize, isAuth }) => {
  // const [page, setPage] = useState(Math.ceil(18290 / pageSize));

  const startPage = 171;
  const [page, setPage] = useState(startPage);

  // const [totalPagesCount, setTotalPagesCount] = useState(page + 1);
  const [totalPages, setTotalPages] = useState(page);

  const [friends, setFriends] = useState([]);

  const [search, setSearch] = useState('');

  const [isLoading, setIsLoading] = useState(false);

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
        <Form.Check disabled={!isAuth} type="switch" label="followed" />

        <div className={styles.drop}>
          Friends on page:
          <DropdownMenu
            pageSize={pageSize}
            setPageSize={setPageSize}
            setPage={setPage}
          />
        </div>
      </div>

      <Pagination totalPages={totalPages} page={page} />

      <div className={styles.container}>
        {friends.map((item) => (
          <Friend key={item.id} isAuth={isAuth} {...item} />
        ))}
      </div>

      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </section>
  );
};

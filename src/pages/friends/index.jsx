import { useEffect, useState } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { DropdownMenu } from './dropdown';
import { axiosGet } from '../../utils/axios';
import { Friend } from '../../components/friend';
import { Pagination } from './pagination';
import styles from './friends.module.scss';

export const Friends = ({ pageSize, setPageSize, isAuth }) => {
  const startPage = 2;
  const [page, setPage] = useState(startPage);

  const [totalPages, setTotalPages] = useState(page);

  const [friends, setFriends] = useState([]);

  const [search, setSearch] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        await axiosGet(
          // `/users?page=${page}&count=${pageSize}&term=${search}`
          `/users?p=${page}&l=${pageSize}${search ? '&search=' + search : ''}` //mockapi
        ).then((data) => {
          // setTotalPages(Math.ceil(data.totalCount / pageSize) || 1);
          setTotalPages(Math.ceil(100 / pageSize) || 1); //mockapi
          // if (
          //   page <= Math.ceil(data.totalCount / pageSize) ||
          //   data.totalCount === 0
          // )
          // setFriends(data.items);
          setFriends(data);
        });
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    })();
  }, [page, pageSize, search]);

  page > totalPages && setPage(totalPages);

  return (
    <section className={styles.wrapper}>
      {isLoading ? (
        <div className={styles.spinner}>
          <div className="">
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="info" />
            <Spinner animation="border" variant="warning" />
          </div>
          <h4>Loading...</h4>
        </div>
      ) : (
        <>
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

          <Pagination totalPages={totalPages} page={page} setPage={setPage} />

          <div className={styles.container}>
            {friends.map((item) => (
              <Friend key={item.id} isAuth={isAuth} {...item} />
            ))}
          </div>

          <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </>
      )}
    </section>
  );
};

import { useEffect, useState } from 'react';
import {
  Form,
  Spinner,
  ToggleButton,
  ToggleButtonGroup,
} from 'react-bootstrap';
import { DropdownMenu } from './dropdown';
import { axiosGet } from '../../utils/axios';
import { Friend } from '../../components/friend';
import { Pagination } from './pagination';
import { SpinnerComp } from '../../components/spinner';

import styles from './friends.module.scss';

export const Friends = ({ pageSize, setPageSize, isAuth }) => {
  const startPage = 1;
  const [page, setPage] = useState(startPage);

  const [totalPages, setTotalPages] = useState(page);

  const [friends, setFriends] = useState([]);

  const [search, setSearch] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [mode, setMode] = useState('any');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        await axiosGet(
          `/users?page=${page}&count=${pageSize}&term=${search}&friend=${mode}`,
          {
            withCredentials: true,
          }
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
      setIsLoading(false);
    })();
  }, [page, pageSize, search, mode]);

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
        <ToggleButtonGroup name="radio" value={mode} onChange={setMode}>
          <ToggleButton
            id="tbg-btn-1"
            variant={'outline-secondary'}
            value={true}
          >
            followed
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-2"
            variant={'outline-secondary'}
            value={false}
          >
            not followed
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-3"
            variant={'outline-secondary'}
            value={'any'}
          >
            all users
          </ToggleButton>
        </ToggleButtonGroup>

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
          <Friend
            key={item.id}
            isAuth={isAuth}
            setFriends={setFriends}
            {...item}
          />
        ))}
      </div>

      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </section>
  );
};

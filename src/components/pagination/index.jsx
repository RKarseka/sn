import styles from './pagination.module.scss';

export const Pagination = ({ page = 1, changePage, maxPages }) => {
  const setPageNumber = (setPage) => {
    switch (setPage) {
      case -Infinity:
        page > 1 && changePage(1);

        break;
      case -1:
        page > 1 && changePage((prev) => prev - 1);

        break;
      case 1:
        page < maxPages && changePage((prev) => prev + 1);

        break;
      case Infinity:
        page < maxPages && changePage(maxPages);

        break;
    }
  };
  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => {
          setPageNumber(-Infinity);
        }}
      >
        first page
      </button>
      <button
        onClick={() => {
          setPageNumber(-1);
        }}
      >
        {'< prev page '}
      </button>

      <span>{page}</span>
      <button
        onClick={() => {
          setPageNumber(+1);
        }}
      >
        {' next page >'}
      </button>
      <button
        onClick={() => {
          setPageNumber(Infinity);
        }}
      >
        last page
      </button>
    </div>
  );
};

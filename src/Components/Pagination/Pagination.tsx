import { IPropsPagination } from "../../Interfaces/interface.types";
import classes from "./pagination.module.scss";

export default function Pagination({
  totalPages,
  currentPage,
  setPage,
}: IPropsPagination) {
  // Создаем массив из всех целых чисел <= общему количеству страниц
  const pagination: any[] = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Режем этот массив и добавляем в него "..." в местахб которые мы должны пропустить
  if (currentPage > 3) {
    pagination.splice(1, currentPage - (currentPage == 6 ? 4 : 3), "...");
  }
  if (currentPage < totalPages - 2) {
    pagination.splice(
      currentPage + (currentPage == 1 ? 2 : 1),
      totalPages - currentPage - (currentPage == 1 ? 3 : 2),
      "..."
    );
  }

  return (
    <div className={classes.wrapper}>
      <ul className={classes.pagination}>
        <li>
          {/* Стрелка. Меняет текушую страницу на предыдущую, если она не равна 1 */}
          <button
            className={classes.nums}
            onClick={() => {
              if (currentPage != 1) setPage((prev: number) => prev - 1);
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.6877 4.28349C13.5129 4.06977 13.1979 4.03827 12.9841 4.21313L6.38415 9.61313C6.26808 9.7081 6.20077 9.85015 6.20077 10.0001C6.20077 10.1501 6.26808 10.2921 6.38415 10.3871L12.9841 15.7871C13.1979 15.962 13.5129 15.9305 13.6877 15.7167C13.8626 15.503 13.8311 15.188 13.6174 15.0131L7.49036 10.0001L13.6174 4.98709C13.8311 4.81223 13.8626 4.49722 13.6877 4.28349Z"
                fill="#575757"
              />
            </svg>
          </button>
        </li>
        {/* Тут будут выводиться все страницы в соответствии с созданным в начале массивом */}
        {pagination == undefined ? (
          <li>Loading...</li>
        ) : (
          pagination.map((page: any) => (
            <li key={page}>
              {page == "..." ? (
                <button className={classes.dots} disabled>
                  {page}
                </button>
              ) : (
                <button
                  className={
                    page == currentPage ? classes.current : classes.nums
                  }
                  onClick={() => setPage(page)}
                >
                  {page}
                </button>
              )}
            </li>
          ))
        )}
        <li>
          {/* Стрелка. Меняет текушую страницу на следующую, если она не равна 1 */}
          <button
            className={classes.nums}
            onClick={() => {
              if (currentPage != totalPages)
                setPage((prev: number) => prev + 1);
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.31226 4.28349C6.48712 4.06977 6.80213 4.03827 7.01585 4.21313L13.6159 9.61313C13.7319 9.7081 13.7992 9.85015 13.7992 10.0001C13.7992 10.1501 13.7319 10.2921 13.6159 10.3871L7.01585 15.7871C6.80213 15.962 6.48712 15.9305 6.31226 15.7167C6.13739 15.503 6.16889 15.188 6.38261 15.0131L12.5096 10.0001L6.38261 4.98709C6.16889 4.81223 6.13739 4.49722 6.31226 4.28349Z"
                fill="#575757"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}

// Для получения размеров страницы используется данный хук
import { useMediaQuery } from "react-responsive";

import { useEffect, useState } from "react";
// Интерфейсы
import { IPaintings, IAuthors, ILocations } from "./Interfaces/interface.types";
// Компоненты
import Card from "./Components/Card/Card";
import Nav from "./Components/Nav/Nav";
import Pagination from "./Components/Pagination/Pagination";
import SearchAndFilters from "./Components/SearchAnFilters/SearchAndFilters";
import FilterMenu from "./Components/FilterMenu/FilterMenu";
// Стили
import classes from "./app.module.scss";
// Xук получения данных
import useGetPaintings from "./Hooks/useGetPaintings";
import useGetAuthors from "./Hooks/useGetAuthors";
import useGetLocations from "./Hooks/useGetLocations";

function App() {
  const [artist, setArtist] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [yearFrom, setYearFrom] = useState<string>("");
  const [yearTo, setYearTo] = useState<string>("");
  const [searchParams, setSearchParams] = useState("");
  const [disp, setDisp] = useState<boolean>(false);
  // Возвращает True, если ширина страницы не меньше 1440px
  const isLarge = useMediaQuery({ minWidth: 1440 });
  // Возвращает True, если ширина входит в интервал от 768px до 1439px
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  // Возвращает True, если ширина страницы не больше 767px
  const isLittle = useMediaQuery({ maxWidth: 767 });
  // Определяю тип страницы, чтобы не перебирать постоянно 3
  // булевые переменные (1 - isLittle, 2 - isMedium, 3 - isLarge)
  const [typeOfScreen, setTypeOfScreen] = useState<number>(
    isLarge || isMedium ? (isLarge ? 3 : 2) : 1
  );
  // Вызывается каждый раз, когда обновляется одно из состояний:
  // (isLarge, isLittle, isMedium) после чего изменяем состояние типа страницы
  useEffect(() => {
    setTypeOfScreen(isLarge || isMedium ? (isLarge ? 3 : 2) : 1);
  }, [isLarge, isLittle, isMedium]);

  const [page, setPage] = useState<number>(1);
  // Получаем информацию по картинам, авторам и локациям
  const { paintings } = useGetPaintings(
    page,
    6,
    searchParams, // Поисковая строка
    yearFrom, // С какого года
    yearTo, // До какого года
    artist, // id автора
    location // id локации
  );
  const { authors } = useGetAuthors();
  const { locations } = useGetLocations();

  // Получаем количество страниц
  const totalPages =
    Number(Math.ceil(paintings.data?.headers["x-total-count"] / 6)) || 0;
  // Обновляем картины при каждом изменении номера страницы
  useEffect(() => {
    paintings.refetch();
  }, [page]);
  useEffect(() => {
    paintings.refetch();
    setPage(1);
  }, [searchParams, yearFrom, yearTo, artist, location]);
  return (
    <div
      className={classes.background}
      style={disp ? { position: "fixed" } : {}}
    >
      <FilterMenu
        disp={disp}
        setDisp={setDisp}
        typeOfScreen={typeOfScreen}
        setArtist={setArtist}
        setLocation={setLocation}
        setYearFrom={setYearFrom}
        setYearTo={setYearTo}
        isLittle={isLittle}
        authors={authors.data}
        locations={locations.data}
      />
      <Nav typeOfScreen={typeOfScreen} />
      <SearchAndFilters
        setDisp={setDisp}
        typeOfScreen={typeOfScreen}
        setSearchParams={setSearchParams}
      />
      {paintings.data?.data != undefined ? (
        paintings.data?.data.length == 0 ? (
          <div
            className={classes.notFound}
            style={{ padding: `30px ${isLarge ? "100px" : "20px"}` }}
          >
            <p className={classes.header}>
              No matches for <b>Lorem</b>
            </p>
            <p className={classes.second}>
              Please try again with a different spelling or keywords.
            </p>
          </div>
        ) : (
          <div
            className={classes.wrapper}
            style={{ padding: `30px ${isLarge ? "100px" : "20px"}` }}
          >
            <div
              className={classes.main}
              style={{
                gridTemplateColumns: `repeat(${typeOfScreen}, auto)`,
                gridTemplateRows: `repeat(1, auto)`,
                gridGap: `${isLarge ? "32px" : "24px"}`,
              }}
            >
              {paintings.data == undefined ? (
                <p>Loading...</p>
              ) : (
                paintings.data.data.map((painting: IPaintings) => (
                  <Card
                    author={
                      authors.isLoading
                        ? ""
                        : authors.data.find(
                            (author: IAuthors) => author.id == painting.authorId
                          ).name
                    }
                    id={painting.id}
                    created={painting.created}
                    location={
                      locations.isLoading
                        ? ""
                        : locations.data.find(
                            (locations: ILocations) =>
                              locations.id == painting.locationId
                          ).location
                    }
                    name={painting.name}
                    typeOfScreen={typeOfScreen}
                    url={painting.imageUrl}
                    key={painting.id}
                  />
                ))
              )}
            </div>
            <Pagination
              totalPages={totalPages}
              currentPage={page}
              setPage={setPage}
            />
          </div>
        )
      ) : (
        <div>Error</div>
      )}
    </div>
  );
}

export default App;

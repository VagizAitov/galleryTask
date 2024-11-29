import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function getData(
  page: number,
  limit: number,
  params: string,
  yearFrom: string,
  yearTo: string,
  author: string,
  location: string
) {
  return axios.get(
    // Проверяем параметры фильтрации: если равны "", то возвращаем "", т.к. если бы мы вернули "locationId="(для примера), то нам бы вернулся пустой массив,
    // ...иначе возвращаем "&locationId=${locationId}"
    `https://test-front.framework.team/paintings?q=${params}&_limit=${limit}&_page=${page}${yearFrom == "" ? "" : `&created_gte=${yearFrom}`}${yearTo == "" ? "" : `&created_lte=${yearTo}`}${
      author == "" ? "" : `&authorId=${author}`
    }${location == "" ? "" : `&locationId=${location}`}`
  );
}

export default function useGetPaintings(
  page: number,
  limit: number,
  params: string,
  yearFrom: string,
  yearTo: string,
  author: string,
  location: string
) {
  const paintings = useQuery({
    queryKey: ["paintings", page],
    queryFn: () =>
      // page - текущая страница | limit - количество картин на странице | params - поиск картины по строке | yearFrom - начиная с какого года искать картины |
      // yearTo - до какого года искать картины | author - id автора | location - id локации
      getData(page, limit, params, yearFrom, yearTo, author, location),
  });

  return { paintings };
}

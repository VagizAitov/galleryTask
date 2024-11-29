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
      getData(page, limit, params, yearFrom, yearTo, author, location),
  });

  return { paintings };
}

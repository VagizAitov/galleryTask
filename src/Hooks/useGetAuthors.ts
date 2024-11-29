import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Получаем всех авторов

async function getData() {
  return axios.get(`https://test-front.framework.team/authors`);
}

export default function useGetAuthors() {
  const authors = useQuery({
    queryKey: ["authors"],
    queryFn: getData,
    select: (data) => data.data,
  });

  return { authors };
}

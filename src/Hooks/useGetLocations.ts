import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function getData() {
  return axios.get(`https://test-front.framework.team/locations`);
}

export default function useGetLocations() {
  const locations = useQuery({
    queryKey: ["locations"],
    queryFn: getData,
    select: (data) => data.data,
  });

  return { locations };
}

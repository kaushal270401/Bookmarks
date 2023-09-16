import { useQuery } from "react-query";
import { fetchUser } from "../api";

export const useQueryHook = (id:any) => {
  return useQuery(["user", id], () => fetchUser(id));
};

import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api/index";
import { queryClient } from "../../api";

type User = {
  id: number;
  name: string;
  email: string;
};

type IGetUsersReturn = User[];

export function useUsersReactQuery(
  payload: { load: string[]; size: number },
  times: any[]
) {
  times.push(["hook called", performance.now()]);
  const queryAns = useQuery<IGetUsersReturn, Error>(
    {
      queryKey: [],
      queryFn: () => {
        times.push(["queryFn called", performance.now()]);
        const stats = {
          time0: times[1][1] - times[0][1],
          loadSize: payload.size,
        };
        const ans = getUsers(payload.load, stats);
        return ans;
      },
    },
    queryClient
  );
  return queryAns;
}
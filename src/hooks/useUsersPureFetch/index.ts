import { getUsers } from "./api/index";

export function useUsersPureFetch(
  payload: { load: string[]; size: number },
  times: any[]
) {
  times.push(["hook called", performance.now()]);
  times.push(["queryFn called", performance.now()]);
  const stats = {
    time0: times[1][1] - times[0][1],
    loadSize: payload.size,
  };
  const ans = getUsers(payload.load, stats);
  return ans;
}

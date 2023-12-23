import { api } from "../../../api";

export async function getUsers(hugePayload: string[], stats: any) {
  const start = performance.now();
  const response = await api.post("/users", hugePayload);
  const end = performance.now();

  stats.time1 = end - start;
  sendStatistics(stats);

  return response.data;
}

function sendStatistics({
  time0,
  time1,
  loadSize,
}: {
  time0: number;
  time1: number;
  loadSize: number;
}) {
  fetch("http://localhost:3001/statistics-react-query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ time0, time1, loadSize }),
  });
}


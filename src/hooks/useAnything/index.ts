import { useQuery } from "@tanstack/react-query";
import { getAnything } from "./api/index";
import { queryClient } from "../../api";

export function useUsers(payload: any) {
    const start = performance.now();
    const queryAns = useQuery<any, Error>(
        {
            queryKey: ['list-users'],
            queryFn: () => getAnything(payload)
        }, queryClient
    );
    const end = performance.now();
    console.log(`useAnything took ${end - start} milliseconds.`);
    return queryAns;
}

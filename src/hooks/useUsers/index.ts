import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api/index";
import { queryClient } from "../../api";

type User = {
    id: number;
    name: string;
    email: string;
};

type IGetUsersReturn = User[];

export function useUsers(hugePayload: string[]) {
    const start = performance.now();
    const queryAns = useQuery<IGetUsersReturn, Error>(
        {
            queryKey: ['list-users'],
            queryFn: () => getUsers(hugePayload)
        }, queryClient
    );
    const end = performance.now();
    console.log(`useUsers took ${end - start} milliseconds.`);
    console.log(queryAns);
    return queryAns;
}

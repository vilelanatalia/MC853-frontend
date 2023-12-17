import { api } from '../../../api';

export async function getUsers(hugePayload: string[]) {
    const response = await api.post('/users', hugePayload);

    return response.data;
}
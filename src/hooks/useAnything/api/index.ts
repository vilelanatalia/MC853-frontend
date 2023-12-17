import { api } from '../../../api';

export async function getAnything(payload: any) {
    const response = await api.post('/other-route', payload);

    return response.data;
}
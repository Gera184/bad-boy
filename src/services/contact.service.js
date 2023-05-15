import { makeRequest } from "./makeRequest";

export async function sendMessage(data) {
    return makeRequest(`/customers.json`)
}

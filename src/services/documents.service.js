import { makeRequest } from "./makeRequest";

export async function deleteDocument(data) {
    return makeRequest(`/newDocument.json`)
}
export async function delDocumentMany(data) {
    return makeRequest(`/newDocument.json`)
}

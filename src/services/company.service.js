import { makeRequest } from "./makeRequest";

export async function checkRegistrationNumber(RegNo) {
    return makeRequest(`/customers.json`)
}

export async function uploadCompanyImage(data) {
    return makeRequest(`/customers.json`)
}

export async function removeCompanyImage(data) {
    return makeRequest(`/customers.json`)
}
export async function getCompanyDocuments() {
    return makeRequest(`/companyDocs.json`)
}


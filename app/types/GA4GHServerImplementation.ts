import GA4GHServerType from "./GA4GHServerType";

type GA4GHServerImplementation = {
    id: number
    name: string
    type: GA4GHServerType
    baseUrl: string
    country: string
    lastTested: string
    testStatus: string
}

export {type GA4GHServerImplementation};

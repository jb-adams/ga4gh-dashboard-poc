import { useState, useEffect } from "react";
import Papa from 'papaparse';
import type { ParseResult } from 'papaparse';
import { type GA4GHServerImplementation } from "../types/GA4GHServerImplementation";
import { type GA4GHServerImplementationList } from "../types/GA4GHServerImplementationList";

const useReadCSV = () => {
    const [serverList, setServerList] = useState<GA4GHServerImplementationList>({data: []})

    const getCSV = () => {
        Papa.parse("/ga4ghServerImplementations.csv", {
            header: true,
            download: true,
            skipEmptyLines: true,
            delimiter: ",",
            complete: (results: ParseResult<GA4GHServerImplementation>) => {
                setServerList(results);
            }
        })
    }

    useEffect(() => {
        getCSV()
    }, [])

    return serverList;
}

export default useReadCSV;
import {
    Heading,
    Separator
} from "@chakra-ui/react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
/*
import type { Ga4ghServerImplementationList } from "~/hooks/useReadCSV";

interface ServerTypeBarChart {
    serverImplementations: Ga4ghServerImplementationList
}

interface ChartData {
    htsget: number,
    refget: number,
    rnaget: number,
    drs: number,
    trs: number,
    wes: number,
    tes: number,
    beacon: number,
    dataconnect: number
}

export default function ServerTypeBarChart({serverImplementations}: ServerTypeBarChart) {
    console.log("bar chart")
    console.log(serverImplementations);

    const chartData: ChartData = {
        htsget: 0,
        refget: 0,
        rnaget: 0,
        drs: 0,
        trs: 0,
        wes: 0,
        tes: 0,
        beacon: 0,
        dataconnect: 0
    }

    const incrementChartData = (str: keyof typeof chartData) => {
        chartData[str]++;
    };


    serverImplementations.data.forEach(item => {
        incrementChartData(item.type);
    })


    const data = {
        labels: ["V1", "V2", "V3"],
        datasets: [{
            data: [100, 110, 120]
        }]
    }

    return (
        <div>
            <Bar data={data}
             />
            <Separator />
        </div>
    );
}
*/
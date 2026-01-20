import {
    Heading,
    Separator,
    Stack
} from "@chakra-ui/react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import { type GA4GHServerImplementationList } from "~/types/GA4GHServerImplementationList";

interface StatusBarChart {
    serverImplementations: GA4GHServerImplementationList
}

interface ChartData {
    [key: string]: number
}

const divStyle = {
    marginTop: '50px',
    marginBottom: '50px'
}

export default function StatusBarChart({serverImplementations}: StatusBarChart) {
    const chartData: ChartData = {}

    const incrementChartData = (str: keyof typeof chartData) => {
        if (!(str in chartData)) {
            chartData[str] = 0;
        }
        chartData[str]++;
    };

    serverImplementations.data.forEach(item => {
        incrementChartData(item.testStatus);
    })

    const labels: string[] = [];
    const chartInputData: number[] = [];

    Object.keys(chartData).forEach(key => {
        labels.push(key);
        chartInputData.push(chartData[key as keyof typeof chartData]);
    });

    const data = {
        labels: labels,
        datasets: [{
            data: chartInputData
        }]
    }

    return (
        <div style={divStyle}>
            <Stack width="full" gap="5">
                <Heading size="lg">Most recent test status for all GA4GH servers</Heading>
                <Bar data={data}/>
            </Stack>
            <Separator />
        </div>
    );
}
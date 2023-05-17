import 'chartjs-adapter-moment' // Импорт плагина
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { type ChartLine } from '../../types/ChartsData'
import type { ChartOptions } from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    Filler

)
interface Props {
    title: string
    chartLines: ChartLine[]
}
export default function LineChart({ title, chartLines }: Props): JSX.Element {
    const options: ChartOptions<'line'> = {
        responsive: true,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day'
                }

            },
            y: {
                stacked: true,
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'top' as const
            },
            title: {
                display: true,
                text: title
            }
        }
    }
    const data = {
        labels: [],
        datasets: chartLines
    }

    return (
        <Line options={options} data={data} />
    )
}

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
export default function LineChart({ title, chartLines }): JSX.Element {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const
            },
            title: {
                display: true,
                text: title
            }
        },
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

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { type ChartLine } from '../../types/ChartsData'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

interface Props {
    title: string
    chartLines: ChartLine[]
}
export function StackedChart({ chartLines, title }: Props): JSX.Element {
    const options = {
        plugins: {
            title: {
                display: true,
                text: title
            }
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false
                }
            },
            y: {
                stacked: true,
                beginAtZero: true,
                grid: {
                    display: false
                }
            }
        },
        borderRadius: 5
    }
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

    return <Bar options={options} data={{ labels, datasets: chartLines }} />
}

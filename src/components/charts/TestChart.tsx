import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const data = {
    labels: ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05'],
    datasets: [
        {
            label: 'Пример данных',
            data: [12, 19, 3, 5, 2],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }
    ]
}

const options = {
    scales: {
        x: {
            type: 'time',
            time: {
                unit: 'day'
            },
            title: {
                display: true,
                text: 'Дата'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Значение'
            }
        }
    }
}

const TestChart = () => {
    React.useEffect(() => {
        Chart.register(Chart.controllers.line)
    }, [])

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
}

export default TestChart

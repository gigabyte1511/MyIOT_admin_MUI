import { Box, styled } from '@mui/material'
import { StackedChart } from '../charts/StackedChart'
import { type GetDeviceWithData } from '../../types/DeviceData'
import { type Color } from '../../types/Styles'

const Chart = styled(Box)({
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: '100%'
})

const StackedChartContainer = styled(Chart)({
    width: 600
})

export default function MeasuresCountChartContainer({ data }: { data: Array<Color & GetDeviceWithData> }): JSX.Element {
    function countDays(device: GetDeviceWithData): number[] {
        const measuresCountInDays = []
        for (let i = 1; i <= 30; i += 1) {
            let count = 0
            device.measures.forEach((measure) => {
                if (new Date(measure.date).getDate() === i) count += 1
            })
            measuresCountInDays.push(count)
        }
        return measuresCountInDays
    }
    const labelData = data.map((device) => {
        return (
            {
                label: device.device_name,
                borderColor: device.color,
                backgroundColor: device.color,
                data: countDays(device)
            }
        )
    }
    )
    console.log(labelData)

    return (
        <StackedChartContainer>
            <StackedChart title={'Number of measurements per month'} data={labelData} />
        </StackedChartContainer>
    )
}

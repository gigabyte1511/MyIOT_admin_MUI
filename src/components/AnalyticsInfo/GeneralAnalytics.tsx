import { Box, Grid, styled } from '@mui/material'
import FactsContainer from './FactsContainer'
import InteractiveChart from '../charts/InteractiveChart'
import { StackedChart } from '../charts/StackedChart'
import { type GetDeviceWithData } from '../../types/DeviceData'

const Chart = styled(Box)({
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: '100%'
})

const StackedChartContainer = styled(Chart)({
    width: 600
})
const InteractiveChartContainer = styled(Chart)({
    width: 1200
})

export default function GeneralAnalytics({ data }: { data: GetDeviceWithData[] }): JSX.Element {
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
        const colorR = Math.floor(Math.random() * (254 - 1)) + 1
        const colorG = Math.floor(Math.random() * (254 - 1)) + 1
        const colorB = Math.floor(Math.random() * (254 - 1)) + 1

        return (
            {
                label: device.device_name,
                borderColor: `rgb(${colorR}, ${colorG}, ${colorB})`,
                backgroundColor: `rgba(${colorR}, ${colorG + 0}, ${colorB + 0}, 0.7)`,
                data: countDays(device)
            }
        )
    }
    )
    console.log(labelData)

    return (
        <Grid
            spacing={1}
            container
            justifyContent={'center'}
        >
            <Grid item xs={0}>
                <FactsContainer data={data} />
            </Grid>
            <Grid item xs={0}>
                <StackedChartContainer>
                    <StackedChart title={'Number of measurements per month'} data={labelData} />
                </StackedChartContainer>
            </Grid>
            <Grid item xs={0}>
                <InteractiveChartContainer>
                    <InteractiveChart />
                </InteractiveChartContainer>
            </Grid>
        </Grid>
    )
}

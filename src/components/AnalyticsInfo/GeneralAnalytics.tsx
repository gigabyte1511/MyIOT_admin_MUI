import { Grid } from '@mui/material'
import FactsContainer from './FactsContainer'
import { type GetDeviceWithData } from '../../types/DeviceData'
import MeasuresCountChartContainer from './MeasuresCountChartContainer'
import InteractiveChartContainer from './InteractiveChartContainer'

export default function GeneralAnalytics({ data }: { data: GetDeviceWithData[] }): JSX.Element {
    const dataWithColor = data.map((device) => {
        const colorR = Math.floor(Math.random() * (254 - 1)) + 1
        const colorG = Math.floor(Math.random() * (254 - 1)) + 1
        const colorB = Math.floor(Math.random() * (254 - 1)) + 1
        return { ...device, color: `rgb(${colorR}, ${colorG}, ${colorB})` }
    })
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
                <MeasuresCountChartContainer data={dataWithColor} />
            </Grid>
            <Grid item xs={0}>
                <InteractiveChartContainer data={dataWithColor} />
            </Grid>
        </Grid>
    )
}

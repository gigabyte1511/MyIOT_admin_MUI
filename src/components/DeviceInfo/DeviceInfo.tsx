import { Grid, styled } from '@mui/material'
import DeviceImage from './DeviceImage'
import DeviceForm from '../forms/DeviceForm'
import LineChart from '../charts/LineChart'
import { type GetDeviceWithData } from '../../types/DeviceData'
import { type ChartLine } from '../../types/ChartsData'

const MyContainer = styled('div')({
    padding: 10,
    backgroundColor: '#444444',
    borderRadius: 10
})

const ChartContainer = styled('div')({
    display: 'flex',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10
})

export default function DeviceInfo({ device }: { device: GetDeviceWithData }): JSX.Element {
    const chartLines: ChartLine[] = [
        {
            label: 'Battary voltage',
            borderColor: '#2da7ff',
            backgroundColor: '#2da7ff4e',
            data: device.statuses
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .map((status) => ({ x: status.date, y: status.voltage })),
            fill: true,
            hidden: false
        }
    ]
    return (
        <MyContainer>
            <Grid
                container
                alignItems="flex-start"
                spacing={2}>
                <Grid item xs={3}>
                    <DeviceImage data={device} />
                </Grid>
                <Grid item xs={3}>
                    <DeviceForm data={device} />
                </Grid>
                <Grid item xs>
                    <ChartContainer>
                        <LineChart
                            title="Battery level chart"
                            chartLines={chartLines}
                        />
                    </ChartContainer>
                </Grid>
            </Grid>
        </MyContainer>
    )
}

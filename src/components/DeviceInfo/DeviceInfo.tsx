import { Grid, styled } from '@mui/material'
import DeviceImage from './DeviceImage'
import DeviceForm from '../forms/DeviceForm'
import LineCharts from '../charts/LineChart'
import { type GetDeviceWithData } from '../../types/DeviceData'

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
    const chartLines = [
        {
            label: 'Battary voltage',
            borderColor: '#2da7ff',
            backgroundColor: '#2da7ff4e',
            fill: true,
            data: device.statuses.map((elem) => elem.voltage)
        }
    ]
    const labels = device.statuses.map((elem) => elem.date)
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
                        <LineCharts title="Battery level chart" chartLines={chartLines} labels={labels} />
                    </ChartContainer>
                </Grid>
            </Grid>
        </MyContainer>
    )
}

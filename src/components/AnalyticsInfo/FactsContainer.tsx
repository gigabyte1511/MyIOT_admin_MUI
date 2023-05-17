import { Grid } from '@mui/material'
import AnatyticsFact from './AnatyticsFact'
import { type DeviceMeasure, type GetDeviceWithData } from '../../types/DeviceData'

export default function FactsContainer({ data }: { data: GetDeviceWithData[] }): JSX.Element {
    const deviceCounter = data.length
    const allMeasuresCounter: number = data
        .reduce((acc: DeviceMeasure[], elem: GetDeviceWithData) => [...acc, ...elem.measures], [])
        .length
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <AnatyticsFact label="Status" value={'Test mode'} />
            </Grid>
            <Grid item xs={6}>
                <AnatyticsFact label="Active devices" value={deviceCounter} />
            </Grid>
            <Grid item xs={6}>
                <AnatyticsFact label="Measures counter" value={allMeasuresCounter} />
            </Grid>
            <Grid item xs={6}>
                <div>
                    <AnatyticsFact label="Devices" value={3} />

                </div>
            </Grid>
        </Grid>

    )
}

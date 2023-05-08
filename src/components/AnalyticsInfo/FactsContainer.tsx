import { Grid } from '@mui/material'
import AnatyticsFact from './AnatyticsFact'

export default function FactsContainer({ data }): JSX.Element {
    const deviceCounter = data.length
    const allMeasuresCounter = data
        .reduce((acc, elem) => [...acc, ...elem.measures], [])
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

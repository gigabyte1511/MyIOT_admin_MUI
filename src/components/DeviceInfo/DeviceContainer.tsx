import { Outlet, useParams } from 'react-router-dom'
import DeviceInfo from './DeviceInfo'
import DeviceLog from './DeviceLog'
import { Grid } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { getDeviceWithDataByID } from '../../API/api'

export const GET_DEVICE_BY_ID_QUERY_KEY = 'GET_DEVICE_BY_ID_QUERY_KEY'

export default function DeviceContainer(): JSX.Element {
    const { id } = useParams()
    const { isError, isSuccess, data, error } = useQuery({
        queryKey: [GET_DEVICE_BY_ID_QUERY_KEY, id],
        queryFn: getDeviceWithDataByID
    })

    if (isError) console.log('ERROR', error)
    if (isSuccess) {
        return (
            <Grid
                spacing={1}
                container
                direction="row"
                justifyContent="center"
                alignItems="baseline"
            >
                <Grid item xs={12}>
                    <DeviceInfo device={data} />
                </Grid>
                <Grid item xs={12}>
                    <DeviceLog device={data} />
                </Grid>
                <Outlet context={data} />
            </Grid>
        )
    }
    return (
        <div>Loading...</div>
    )
}

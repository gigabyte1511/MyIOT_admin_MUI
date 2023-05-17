import { Outlet, useParams } from 'react-router-dom'
import DeviceInfo from './DeviceInfo'
import DeviceLog from './DeviceLog'
import { Grid, Skeleton } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { getDeviceWithDataByID } from '../../API/api'

export const GET_DEVICE_BY_ID_QUERY_KEY = 'GET_DEVICE_BY_ID_QUERY_KEY'

export default function DeviceContainer(): JSX.Element {
    const { id } = useParams()
    const queryKeys = (id !== undefined) ? [GET_DEVICE_BY_ID_QUERY_KEY, id] : []

    const { isError, isSuccess, data, error } = useQuery({
        queryKey: queryKeys,
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
        <div>
            <Grid
                spacing={1}
                container
                direction="row"
                justifyContent="center"
                alignItems="baseline"
            >
                <Grid item xs={0}>
                    <Skeleton variant="rectangular" animation="wave" sx={{
                        height: 500,
                        width: '85vw',
                        flexGrow: 1,
                        borderRadius: 2
                    }} />
                </Grid>
                <Grid item xs={0}>
                    <Skeleton variant="rectangular" sx={{
                        height: 500,
                        width: '85vw',
                        flexGrow: 1,
                        borderRadius: 2
                    }} />
                </Grid>
            </Grid>
        </div>
    )
}

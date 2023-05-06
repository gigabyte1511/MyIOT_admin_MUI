import { Outlet, useParams } from 'react-router-dom'
import DeviceInfo from './DeviceInfo'
import DeviceLog from './DeviceLog'
import { styled } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { getDeviceByID } from '../../API/API'

export const GET_DEVICE_BY_ID_QUERY_KEY = 'GET_DEVICE_BY_ID_QUERY_KEY'

const MyContainer = styled('div')({
    display: 'flex',
    gap: 10

})

export default function DeviceContainer(): JSX.Element {
    const { id } = useParams()

    const { isError, isSuccess, data, error } = useQuery({
        queryKey: [GET_DEVICE_BY_ID_QUERY_KEY, id],
        queryFn: getDeviceByID
    })
    if (isError) console.log('ERROR', error)
    if (isSuccess) {
        return (
            <MyContainer>
                <DeviceInfo device={data} />
                <DeviceLog device={data} />
                <Outlet context={data} />
            </MyContainer>
        )
    }
}

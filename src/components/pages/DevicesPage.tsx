import { styled } from '@mui/material'
import DevicesList from '../DeviceInfo/DevicesList'
import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { getAllDevicesData } from '../../API/api'
import { Outlet } from 'react-router-dom'
import { type GetDeviceWithData } from '../../types/DeviceData'

export const GET_ALLDEVICES_QUERY_KEY = 'GET_ALLDEVICES_QUERY_KEY'

interface ErrorResponse {
    error: string
}
type QueryResult = UseQueryResult<GetDeviceWithData[], ErrorResponse>

const MyContainer = styled('div')({
    display: 'flex',
    gap: 10
})

export default function DevicePage(): JSX.Element {
    const { isError, isSuccess, data, error }: QueryResult = useQuery({
        queryKey: [GET_ALLDEVICES_QUERY_KEY],
        queryFn: getAllDevicesData
    })
    if (isError) console.log('ERROR', error)
    if (isSuccess) {
        return (
            <MyContainer>
                <DevicesList devices={data} />
                <Outlet />
            </MyContainer>
        )
    }
    return (
        <div>Loading...</div>
    )
}

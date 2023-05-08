import { styled } from '@mui/material'
import DevicesList from '../DeviceInfo/DevicesList'
import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'
import { getAllDevicesWithData } from '../../API/api'

export const GET_ALLDEVICES_QUERY_KEY = 'GET_ALLDEVICES_QUERY_KEY'

const MyContainer = styled('div')({
    display: 'flex',
    gap: 10
})

export default function DevicePage(): JSX.Element {
    const { isError, isSuccess, data, error } = useQuery({
        queryKey: [GET_ALLDEVICES_QUERY_KEY],
        queryFn: getAllDevicesWithData
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

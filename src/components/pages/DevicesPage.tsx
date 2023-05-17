import { Skeleton, styled } from '@mui/material'
import DevicesList from '../DeviceInfo/DevicesList'
import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'
import { getAllDevices } from '../../API/api'

export const GET_ALLDEVICES_QUERY_KEY = 'GET_ALLDEVICES_QUERY_KEY'

const MyContainer = styled('div')({
    display: 'flex',
    gap: 10
})

const SkeletonContainer = styled(Skeleton)({
    height: 200,
    width: 120,
    borderRadius: 10
})

export default function DevicePage(): JSX.Element {
    const { isError, isSuccess, data, error } = useQuery({
        queryKey: [GET_ALLDEVICES_QUERY_KEY],
        queryFn: getAllDevices
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
        <div>
            <SkeletonContainer variant="rectangular" />
        </div>
    )
}

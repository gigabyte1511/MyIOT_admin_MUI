import { styled } from '@mui/material'
import DevicesList from '../../lists/DevicesList'
import DeviceLog from '../../DeviceLog/DeviceLog'
import { useQuery } from '@tanstack/react-query'
import { getAllDevicesData } from '../../../API/API'
import { Outlet } from 'react-router-dom'

const GET_ALLDEVICES_DATA_QUERY_KEY = 'GET_ALLDEVICES_DATA_QUERY_KEY'

const MyContainer = styled('div')({
    display: 'flex',
    gap: 10
})

export default function DevicePage(): JSX.Element {
    const { isError, isSuccess, data, error } = useQuery({
        queryKey: [GET_ALLDEVICES_DATA_QUERY_KEY],
        queryFn: getAllDevicesData
    })
    if (isError) console.log('ERROR', error)
    if (isSuccess) {
        console.log('SUCCESS', data)
        // const devices = data.map((elem) => elem.device_name)
        return (
            <MyContainer>
                <DevicesList devices={data} />
                <Outlet />
                {/* <DeviceLog /> */}
            </MyContainer>
        )
    }
}

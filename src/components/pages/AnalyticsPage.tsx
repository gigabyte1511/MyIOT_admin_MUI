import { styled } from '@mui/material'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { getAllDevicesData } from '../../API/api'
import GeneralAnalytics from '../AnalyticsInfo/GeneralAnalytics'
import { type GetDeviceWithData } from '../../types/DeviceData'

export const GET_ANALYTICS_DATA_QUERY_KEY = 'GET_ANALYTICS_DATA_QUERY_KEY'

interface ErrorResponse {
    error: string
}
type QueryResult = UseQueryResult<GetDeviceWithData[], ErrorResponse>

const MyContainer = styled('div')({
    display: 'flex',
    gap: 10
})

export default function AnalyticsPage(): JSX.Element {
    const { isError, isSuccess, data, error }: QueryResult = useQuery({
        queryKey: [GET_ANALYTICS_DATA_QUERY_KEY],
        queryFn: getAllDevicesData
    })
    if (isError) console.log('ERROR', error)
    if (isSuccess) {
        return (
            <MyContainer>
                <GeneralAnalytics data={data} />
            </MyContainer>
        )
    }
    return (
        <div>Loading...</div>
    )
}

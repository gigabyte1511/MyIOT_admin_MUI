import { styled } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import GeneralAnalytics from '../AnalyticsInfo/GeneralAnalytics'
import { getAllDevicesWithData } from '../../API/api'

export const GET_ANALYTICS_DATA_QUERY_KEY = 'GET_ANALYTICS_DATA_QUERY_KEY'

const MyContainer = styled('div')({
    display: 'flex',
    gap: 10
})

export default function AnalyticsPage(): JSX.Element {
    const { isError, isSuccess, data, error } = useQuery({
        queryKey: [GET_ANALYTICS_DATA_QUERY_KEY],
        queryFn: getAllDevicesWithData
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

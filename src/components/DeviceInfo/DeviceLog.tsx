import { styled } from '@mui/material'
import { useLocation } from 'react-router-dom'
import DeviceDataTabel from './DeviceDataTabel'

const MyContainer = styled('div')({
    padding: 10,
    backgroundColor: '#444444',
    borderRadius: 10
})

export default function DeviceLog({ device }): JSX.Element {
    return (
        <MyContainer>
            <DeviceDataTabel measures={device.measures} />
        </MyContainer>
    )
}

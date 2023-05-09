import { styled } from '@mui/material'
import DeviceDataTabel from './DeviceDataTabel'
import { type GetDeviceWithData } from '../../types/DeviceData'

const MyContainer = styled('div')({
    padding: 10,
    backgroundColor: '#444444',
    borderRadius: 10
})

export default function DeviceLog({ device }: { device: GetDeviceWithData }): JSX.Element {
    return (
        <MyContainer>
            <DeviceDataTabel measures={device.measures} />
        </MyContainer>
    )
}

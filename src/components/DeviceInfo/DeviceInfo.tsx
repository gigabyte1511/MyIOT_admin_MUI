import { styled } from '@mui/material'
import DeviceImage from './DeviceImage'
import DeviceForm from '../forms/DeviceForm'

const MyContainer = styled('div')({
    display: 'flex',
    gap: 10,
    padding: 10,
    backgroundColor: '#444444',
    borderRadius: 10
})

export default function DeviceInfo({ device }): JSX.Element {
    return (
        <MyContainer>
            <DeviceImage data={device} />
            <DeviceForm data={device} />
        </MyContainer>
    )
}

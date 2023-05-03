import { Button, styled } from '@mui/material'
import NamedPlate from '../plates/NamedPlate'
import { type DeviceData } from '../../types/DeviceData'
import { useLocation, useOutletContext } from 'react-router-dom'

const MyContainer = styled('div')({
    display: 'flex',
    gap: 10,
    padding: 10,
    backgroundColor: '#444444',
    borderRadius: 10
})
const ImageContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 10,
    backgroundColor: '#444444',
    borderRadius: 10
})
const ImageEditButton = styled(Button)({
    backgroundColor: 'orange'
})
const DataContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    padding: 10,
    backgroundColor: '#444444',
    borderRadius: 10
})

export default function DeviceInfo(): JSX.Element {
    const { state: device } = useLocation()
    const deviceStatus = device.statuses[device.statuses.length - 1]
    return (
        <MyContainer>
            <ImageContainer>
                <img style={{ height: '200px' }} src="https://cdn.shopify.com/s/files/1/1509/1638/products/esp32-nodemcu-module-wlan-wifi-development-board-mit-cp2102-nachfolgermodell-zum-esp8266-kompatibel-mit-arduino-872375_1024x.jpg?v=1679400491" alt="123" />
                <ImageEditButton variant='contained'>EDIT IMAGE</ImageEditButton>
            </ImageContainer>
            <DataContainer>
                <NamedPlate name='ID' value={device.id} />
                <NamedPlate name='Name' value={device.device_name} />
                <NamedPlate name='Description' value="No description" />
                <NamedPlate name='Last update' value={device.updatedAt} />
                <NamedPlate name='Battery voltage' value={deviceStatus.voltage} />
                <NamedPlate name='GPS' value={deviceStatus.gps} />
                <NamedPlate name='Status' value={deviceStatus.status} />
            </DataContainer>
        </MyContainer>
    )
}

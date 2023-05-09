import { Button, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { type GetDeviceWithData } from '../../types/DeviceData'
import DeviceDeleteButton from '../inputs/buttons/deviceDeleteButton'

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

export default function DeviceImage({ data }: { data: GetDeviceWithData }): JSX.Element {
    const navigate = useNavigate()
    return (
        <ImageContainer>
            <img style={{ height: '200px' }} src={data.device_image} alt="123" />
            <ImageEditButton
                variant='contained'
                onClick={() => { navigate('edit') }}
            >
                EDIT IMAGE
            </ImageEditButton>
            <DeviceDeleteButton deviceID={data.id} />
        </ImageContainer>
    )
}

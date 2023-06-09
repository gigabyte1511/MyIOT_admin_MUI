import { Button, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { type GetDevice } from '../../types/DeviceData'

const MyContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 10,
    backgroundColor: '#444444',
    borderRadius: 10
})
export default function DevicesList({ devices }: { devices: GetDevice[] }): JSX.Element {
    const navigate = useNavigate()
    const $devices = devices.map((elem) =>
        <Button
            variant="contained"
            onClick={() => { navigate(`${elem.id}`) }}
            key={elem.id}
        >
            {elem.device_name}
        </Button>)
    return (
        <MyContainer>
            {$devices}
        </MyContainer>
    )
}

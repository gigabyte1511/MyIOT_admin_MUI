import { Button, styled } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateDeviceByID } from '../../API/API'

const PATCH_DEVICE_IMAGE_QUERY_KEY = 'PATCH_DEVICE_IMAGE_QUERY_KEY'

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

export default function DeviceImage({ data }): JSX.Element {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    // const { mutate } = useMutation({
    //     queryKey: [PATCH_DEVICE_IMAGE_QUERY_KEY],
    //     mutationFn: updateDeviceByID,
    //     onSuccess: (data) => {
    //         queryClient.invalidateQueries(['GET_ALLDEVICES_DATA_QUERY_KEY'])
    //     },
    //     onError: (error) => { console.log('Error', error) }
    // })

    return (
        <ImageContainer>
            <img style={{ height: '200px' }} src={data.device_image} alt="123" />
            <ImageEditButton
                variant='contained'
                onClick={() => { navigate('edit') }}
            >
                EDIT IMAGE
            </ImageEditButton>
        </ImageContainer>
    )
}

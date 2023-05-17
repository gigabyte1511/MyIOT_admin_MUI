import { Button, styled } from '@mui/material'
import { deleteDeviceByID } from '../../../API/api'
import { useNavigate } from 'react-router'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { GET_ALLDEVICES_QUERY_KEY } from '../../pages/DevicesPage'

const DELETE_DEVICE_IMAGE_QUERY_KEY = 'DELETE_DEVICE_IMAGE_QUERY_KEY'

const DeleteDeviceButton = styled(Button)({
    backgroundColor: 'red'
})
export default function DeviceDeleteButton({ deviceID: id }: { deviceID: number }): JSX.Element {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { mutate } = useMutation({
        mutationKey: [DELETE_DEVICE_IMAGE_QUERY_KEY],
        mutationFn: deleteDeviceByID,
        onSuccess: async () => {
            navigate(-1)
            await queryClient.invalidateQueries([GET_ALLDEVICES_QUERY_KEY])
        },
        onError: (error) => { console.log('Error', error) }
    })
    return (
        <DeleteDeviceButton
            variant='contained'
            onClick={() => { mutate({ id }) }}
            disabled={true}
        >
            DELETE DEVICE
        </DeleteDeviceButton>

    )
}

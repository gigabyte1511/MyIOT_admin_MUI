import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { ErrorMessage, Form, Formik } from 'formik'
import { TextField, styled } from '@mui/material'
import * as yup from 'yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { GET_ALLDEVICES_QUERY_KEY } from '../pages/DevicesPage'
import { updateDeviceByID } from '../../API/api'

const PATCH_DEVICE_IMAGE_QUERY_KEY = 'PATCH_DEVICE_IMAGE_QUERY_KEY'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
}

const DataContainer = styled(Form)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fffffff1'

})
const Image = styled('img')({
    width: 250
})

export default function DeviceImageModal() {
    const queryClient = useQueryClient()
    const { device_image, id } = useOutletContext()
    console.log(device_image)
    const [test, setTest] = React.useState(device_image)
    const navigate = useNavigate()

    const { mutate } = useMutation({
        queryKey: [PATCH_DEVICE_IMAGE_QUERY_KEY],
        mutationFn: updateDeviceByID,
        onSuccess: () => {
            queryClient.invalidateQueries(GET_ALLDEVICES_QUERY_KEY)
        },
        onError: (error) => { console.log('Error', error) }
    })

    const handleClose = () => {
        navigate(-1)
    }
    const initialValue = { image: test }
    const handleSubmit = (values) => {
        console.log('eee')
        mutate({ id, device_image: values.image })
        navigate(-1)
    }
    const YupValidation = yup.object().shape({
        image: yup
            .string()
            .url('Not valid URL')
    })

    return (
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Image src={test} alt="" />
                <Formik
                    initialValues={initialValue}
                    validationSchema={YupValidation}
                    onSubmit={handleSubmit}
                >
                    {(props) => {
                        const { image } = props.values
                        setTest(image)
                        return (
                            <DataContainer>
                                <TextField
                                    name="image"
                                    fullWidth
                                    variant="outlined"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    label="image"
                                    value={test}
                                    helperText={<ErrorMessage name="image" />}
                                    error={(props.errors.image != null) && props.touched.image}
                                />
                                <Button
                                    variant="contained"
                                    type="submit"
                                    color="primary"
                                    fullWidth>Submit</Button>

                            </DataContainer>
                        )
                    }}
                </Formik>
            </Box>
        </Modal>
    )
}

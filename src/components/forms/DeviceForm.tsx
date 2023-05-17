import { Button, TextField, styled } from '@mui/material'
import { ErrorMessage, Form, Formik, type FormikValues } from 'formik'
import * as yup from 'yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateDeviceByID } from '../../API/api'
import { GET_ALLDEVICES_QUERY_KEY } from '../pages/DevicesPage'
import { type GetDeviceWithData } from '../../types/DeviceData'

const PATCH_DEVICE_INFO_QUERY_KEY = 'PATCH_DEVICE_INFO_QUERY_KEY'

const DataContainer = styled(Form)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fffffff1'
})

interface FormValues {
    id: number
    device_name: string
    createdAt: string
    batteryVoltage: number
    gps: string
    status: string
}

export default function DeviceForm({ data }: { data: GetDeviceWithData }): JSX.Element {
    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationKey: [PATCH_DEVICE_INFO_QUERY_KEY],
        mutationFn: updateDeviceByID,
        onSuccess: async () => {
            await queryClient.invalidateQueries([GET_ALLDEVICES_QUERY_KEY])
        },
        onError: (error) => { console.log('Error', error) }
    })

    const deviceStatus = data.statuses[data.statuses.length - 1]
    const initialValue: FormValues = {
        id: data.id,
        device_name: data.device_name,
        createdAt: data.createdAt,
        batteryVoltage: deviceStatus.voltage,
        gps: deviceStatus.gps,
        status: deviceStatus.status
    }
    const handleSubmit = (values: FormValues): void => {
        console.log(values)
        mutate({
            id: data.id,
            device_name: values.device_name,
            device_image: data.device_image
        })
    }
    const YupValidation = yup.object().shape({
        id: yup.string(),
        device_name: yup
            .string()
            .min(1, 'Name Should be minimum 1 character')
            .max(12, 'Name Should be minimum 12 character')
            .required('Name is Required'),
        createdAt: yup
            .string(),
        batteryVoltage: yup
            .string(),
        gps: yup
            .mixed(),
        status: yup
            .mixed()
    })
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValue}
            validationSchema={YupValidation}
            onSubmit={handleSubmit}
        >
            {(props) => {
                const { id, device_name, createdAt, batteryVoltage, gps, status } = props.values
                return (
                    <DataContainer>
                        <TextField
                            name="id"
                            fullWidth
                            variant="outlined"

                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            label="ID"
                            value={id}
                            InputProps={{
                                readOnly: true
                            }}
                        />
                        <TextField
                            name="device_name"
                            fullWidth
                            variant="outlined"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            helperText={<ErrorMessage name="device_name" />}
                            error={props.errors.device_name != null && props.touched.device_name}
                            required
                            label="Name"
                            value={device_name}
                        />
                        <TextField name="createdAt"
                            fullWidth
                            variant="outlined"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            label="Created at"
                            value={createdAt}
                            InputProps={{
                                readOnly: true
                            }}
                        />
                        <TextField name="batteryVoltage"
                            fullWidth
                            variant="outlined"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            label="Voltage"
                            value={batteryVoltage}
                            InputProps={{
                                readOnly: true
                            }}
                        />
                        <TextField name="gps"
                            fullWidth
                            variant="outlined"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            label="GPS"
                            value={gps}
                            InputProps={{
                                readOnly: true
                            }}
                        />
                        <TextField name="status"
                            fullWidth
                            variant="outlined"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            helperText={<ErrorMessage name="status" />}
                            error={props.errors.status != null && props.touched.status}
                            label="Status"
                            value={status}
                            InputProps={{
                                readOnly: true
                            }}
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
    )
}

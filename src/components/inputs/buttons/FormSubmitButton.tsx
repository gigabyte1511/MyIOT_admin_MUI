import { Button, styled } from '@mui/material'

const SubmitButton = styled(Button)(({ active }) => (
    {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: (active) ? 'green' : ''
    }
))
interface Props {
    action: () => void
}
export default function FormSubmitButton({ action }: Props): JSX.Element {
    return (
        <SubmitButton
            variant="contained"
            onClick={() => { action() }}
        >
            SUBMIT
        </SubmitButton>

    )
}

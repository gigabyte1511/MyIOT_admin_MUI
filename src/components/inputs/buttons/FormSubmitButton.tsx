import { Button, styled } from '@mui/material'

const SubmitButton = styled(Button)(({ active }) => (
    {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: (active) ? 'green' : ''
    }
))
interface Props {
    active: boolean
}
export default function FormSubmitButton({ active, action }: Props): JSX.Element {
    return (
        <SubmitButton
            variant="contained"
            onClick={() => { action() }}
            active={active}
        >
            {(active) ? 'SUBMIT' : 'EDIT'}
        </SubmitButton>

    )
}

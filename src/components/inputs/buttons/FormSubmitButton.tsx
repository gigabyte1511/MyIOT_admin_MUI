import { Button, styled } from '@mui/material'

// const SubmitButton = styled(Button)(({ active }) => (
//     {
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         backgroundColor: (active) ? 'green' : ''
//     }
// ))
const SubmitButton = styled(Button)(
    {
        marginLeft: 'auto',
        marginRight: 'auto'
    }
)
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

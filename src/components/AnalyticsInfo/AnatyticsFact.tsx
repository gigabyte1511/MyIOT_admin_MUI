import { Typography, styled } from '@mui/material'

const MyContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10
})
const Label = styled('div')({
    color: 'blue'
})
export default function AnatyticsFact({ label, value }: { label: string, value: number | string }): JSX.Element {
    return (
        <MyContainer>
            <Typography variant="h6">
                <Label>{label}</Label>
            </Typography>
            <Typography variant="h4">
                <div>{value}</div>
            </Typography>
            <Typography variant="h7">
                <div>{'Last date'}</div>
            </Typography>
        </MyContainer>
    )
}

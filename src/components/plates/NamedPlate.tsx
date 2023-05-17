import { styled } from '@mui/material'

const MyContainer = styled('div')({
    position: 'relative',
    padding: 13,
    backgroundColor: '#1976D2',
    borderRadius: 10,
    minWidth: 120
})
const Label = styled('div')({
    position: 'absolute',
    top: -2,
    left: 5,
    color: 'rgba(255, 255, 255, 0.5);',
    fontSize: 15
})
const Value = styled('div')({
    fontSize: 20,
    color: 'rgba(255, 255, 255);'

})
interface Props {
    name: string
    value: string | number
}
export default function NamedPlate({ name, value }: Props): JSX.Element {
    return (
        <MyContainer>
            <Label>{name}</Label>
            <Value>{value}</Value>
        </MyContainer>
    )
}

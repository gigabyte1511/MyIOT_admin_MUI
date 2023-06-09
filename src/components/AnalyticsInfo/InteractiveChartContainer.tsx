import { Box, Checkbox, FormControlLabel, FormGroup, styled } from '@mui/material'
import { type GetDeviceWithData } from '../../types/DeviceData'
import { useState, type ChangeEvent } from 'react'
import LineChart from '../charts/LineChart'
import { type Color } from '../../types/Styles'

const MyContainer = styled(Box)({
    display: 'flex',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: '100%'
})

const ChartContainer = styled(Box)({
    display: 'flex',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: '100%',
    width: 1000
})
const DeviceContainer = styled(FormGroup)({
    backgroundColor: '#ffb751',
    borderRadius: '10px 0 0 10px',
    padding: 10,
    '& > :first-child': {
        textAlign: 'center',
        fontSize: 20
    }
})
type CheckState = Record<string, boolean>

export default function InteractiveChartContainer({ data }: { data: Array<Color & GetDeviceWithData> }): JSX.Element {
    const defaultCheckState = data.reduce((acc, device) => {
        return ({
            ...acc, [device.device_name]: true
        })
    }, {})
    const [checkState, setCheckState] = useState<CheckState>(defaultCheckState)
    console.log(checkState)

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setCheckState((state) => ({ ...state, [event.target.name]: !state[event.target.name] }))
    }

    const $devices = data.map((device) => {
        return (
            <FormControlLabel
                name={device.device_name}
                key={device.id}
                control={
                    <Checkbox
                        checked={checkState[device.device_name]}
                        onChange={handleChange}
                    />}
                label={device.device_name} />
        )
    })

    const chartLines = data.map((device) => {
        return {
            label: device.device_name,
            borderColor: device.color,
            backgroundColor: device.color,
            data: device.measures
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .map((measure) => ({ x: measure.date, y: measure.measure_value })),
            hidden: !checkState[device.device_name],
            fill: false
        }
    })

    return (
        <MyContainer>
            <DeviceContainer>
                <div>Devices</div>
                {$devices}
            </DeviceContainer>
            <ChartContainer>
                <LineChart
                    title="Interactive chart"
                    chartLines={chartLines}
                />
            </ChartContainer>
        </MyContainer>
    )
}

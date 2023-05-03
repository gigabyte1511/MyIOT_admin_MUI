import { styled } from '@mui/material'
import { useLocation } from 'react-router-dom'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DeviceDataTabel from '../tabels/DeviceDataTabel/DeviceDataTabel'

const MyContainer = styled('div')({
    padding: 10,
    backgroundColor: '#444444',
    borderRadius: 10
})

export default function DeviceLog(): JSX.Element {
    const { state: device } = useLocation()
    console.log('DeviceLog', device)
    return (
        <MyContainer>
            <DeviceDataTabel measures={device.measures} />
        </MyContainer>
    )
}

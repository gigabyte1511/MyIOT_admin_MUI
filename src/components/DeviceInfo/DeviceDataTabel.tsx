import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export default function DeviceDataTabel({ measures }): JSX.Element {
    const tabelRows = measures.map((elem) =>
        <TableRow>
            <TableCell component="th" scope="row">{elem.id}</TableCell>
            <TableCell component="th" scope="row">{elem.deviceId}</TableCell>
            <TableCell component="th" scope="row">{elem.measure_type}</TableCell>
            <TableCell component="th" scope="row">{elem.measure_value}</TableCell>
            <TableCell component="th" scope="row">{elem.date}</TableCell>
            <TableCell component="th" scope="row">{elem.createdAt}</TableCell>
        </TableRow>)
    return (
        < TableContainer component={Paper} sx={{ borderRadius: 2 }} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Device ID</TableCell>
                        <TableCell align="right">Measure type</TableCell>
                        <TableCell align="right">Value</TableCell>
                        <TableCell align="right">Measure date</TableCell>
                        <TableCell align="right">Registration date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tabelRows}
                </TableBody>
            </Table>
        </ TableContainer>
    )
}

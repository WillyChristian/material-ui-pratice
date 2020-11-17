import React from 'react'
import { 
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from '@material-ui/core'

const Orders = () =>{
    return (
        <div>
            <Typography vartiant='h6'>Ordens</Typography>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="center">ITEMS</TableCell>
                            <TableCell align="right">DATE</TableCell>
                            <TableCell align="right">AMOUNT</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell align="right">1</TableCell>
                        <TableCell align="right">2</TableCell>
                        <TableCell align="right">2.5</TableCell>
                        <TableCell align="right">8</TableCell>
                        <TableCell align="right">20</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default Orders
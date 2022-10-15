import React from 'react'
import { connect } from 'react-redux'
import {
    Typography,
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material'
import Header from 'components/navbar'

import styles from './index.module.scss'

const mapStateToProps = (state) => ({
    cart: state?.cart,
})

const TAX_RATE = 0.07

function ccyFormat(num) {
    return `${num.toFixed(2)}`
}

function priceRow(qty, unit) {
    return qty * unit
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit)
    return { desc, qty, unit, price }
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0)
}

function Cart({ cart }) {
    const rows = Object.keys(cart).reduce(
        (prev, crr) => [...prev, createRow(crr, cart[crr], 1000)],
        []
    )

    const invoiceSubtotal = subtotal(rows)
    const invoiceTaxes = TAX_RATE * invoiceSubtotal
    const invoiceTotal = invoiceTaxes + invoiceSubtotal

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <Typography
                    variant="h4"
                    mx="auto"
                    sx={{ width: 'fit-content' }}
                >
                    I solemnly swear I am up to no good
                </Typography>
                <Typography
                    variant="subtitle2"
                    mt={2}
                    mb={4}
                    mx="auto"
                    sx={{
                        width: 'fit-content',
                        color: '#666',
                    }}
                >
                    Happiness can be found, even in the darkest of times, if one
                    only remembers to turn on the light
                </Typography>
                <Typography
                    variant="subtitle1"
                    mt={2}
                    mb={2}
                    mx="auto"
                    sx={{
                        width: 'fit-content',
                        color: '#666',
                    }}
                >
                    The products we sell are priceless, just like your life!
                </Typography>
                <Typography
                    variant="subtitle2"
                    mt={2}
                    mx="auto"
                    sx={{
                        width: 'fit-content',
                        color: '#666',
                    }}
                >
                    I wouldn't sell the products unless my job's at stake
                </Typography>
                <Typography
                    variant="subtitle2"
                    mb={4}
                    mx="auto"
                    sx={{
                        width: 'fit-content',
                        color: '#666',
                    }}
                >
                    So, 1000 Galleons is the price!
                </Typography>
                <TableContainer
                    component={Paper}
                    sx={{ width: '75%', mx: 'auto' }}
                >
                    <Table
                        sx={{
                            minWidth: 700,
                            backgroundColor: 'rgba(255,160,122, 0.75)',
                        }}
                        aria-label="spanning table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" colSpan={3}>
                                    Details
                                </TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Desc</TableCell>
                                <TableCell align="right">Qty.</TableCell>
                                <TableCell align="right">Unit</TableCell>
                                <TableCell align="right">Sum</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.desc}>
                                    <TableCell>{row.desc}</TableCell>
                                    <TableCell align="right">
                                        {row.qty}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.unit}
                                    </TableCell>
                                    <TableCell align="right">
                                        {ccyFormat(row.price)}
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>Subtotal</TableCell>
                                <TableCell align="right">
                                    {ccyFormat(invoiceSubtotal)}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Tax</TableCell>
                                <TableCell align="right">{`${(
                                    TAX_RATE * 100
                                ).toFixed(0)} %`}</TableCell>
                                <TableCell align="right">
                                    {ccyFormat(invoiceTaxes)}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell align="right">
                                    {ccyFormat(invoiceTotal)}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, undefined)(Cart)

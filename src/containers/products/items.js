import React, { useState } from 'react'
import { connect } from 'react-redux'
import history from 'routes/History'
import { Typography, Paper, Button, Badge } from '@mui/material'
import { products } from 'constants/products'
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import Card from './card'
import { setCartVal } from 'store/cart/action'

import styles from './items.module.scss'

const mapStateToProps = (state) => ({
    cartVal: state?.cart,
})

const mapDispatchToProps = (dispatch) => ({
    dispatchSetCart: (payload) => dispatch(setCartVal(payload)),
})

function Items({ cartVal, dispatchSetCart }) {
    const [cart, setCart] = useState(cartVal ? cartVal : {})

    function handleAddToCart(product) {
        const clonedCart = cloneDeep(cart)
        if (!isEmpty(cart) && cart[product]) {
            clonedCart[product] = parseInt(clonedCart[product]) + 1
            setCart(clonedCart)
        } else {
            clonedCart[product] = 1
            setCart(clonedCart)
        }
    }

    function handleRemoveFromCart(product) {
        const clonedCart = cloneDeep(cart)
        if (cart[product]) {
            clonedCart[product] = parseInt(clonedCart[product]) - 1
            setCart(clonedCart)
        }
    }

    function handleCartClick() {
        dispatchSetCart(cart)
        localStorage.setItem('cart', JSON.stringify(cart))
        history.push('/cart')
    }

    const cartKeys = isEmpty(cart) ? [] : Object.keys(cart)
    const count = isEmpty(cartKeys)
        ? 0
        : cartKeys.reduce((prev, crr) => prev + cart[crr], 0)

    return (
        <div className={styles.wrapper}>
            <Typography variant="h4" mx="auto" sx={{ width: 'fit-content' }}>
                Deathly Hallows
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
                To the well-organized mind, death is but the next great
                adventure
            </Typography>
            <div className={styles.products}>
                {products.map((item) => (
                    <Paper
                        elevation={4}
                        variant="elevation"
                        square={true}
                        sx={{
                            borderRadius: '5px',
                            overflow: 'hidden',
                        }}
                    >
                        <Card
                            onAdd={handleAddToCart}
                            onRemove={handleRemoveFromCart}
                            image={item.image}
                            id={item.id}
                            name={item.name}
                            count={isEmpty(cart) ? 0 : cart[item.id]}
                        />
                    </Paper>
                ))}
            </div>
            <div className={styles.footer}>
                <Badge
                    badgeContent={count}
                    sx={{ mt: 4, mr: 6, marginLeft: 'auto' }}
                    color="primary"
                >
                    <Button
                        variant="outlined"
                        disabled={!count}
                        onClick={handleCartClick}
                    >
                        Add to Cart
                    </Button>
                </Badge>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)

import React from 'react'
import Header from 'components/navbar'
import Items from './items'

import styles from './index.module.scss'

function Products() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Items />
        </div>
    )
}

export default Products

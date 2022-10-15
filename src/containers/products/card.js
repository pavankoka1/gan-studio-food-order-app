import React from 'react'
import { Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import styles from './card.module.scss'

function Card({ image, id, name, count = 0, onAdd, onRemove }) {
    return (
        <div key={id} className={styles.wrapper}>
            <div className={styles.card}>
                <img src={image} alt={id} />
                <div className={styles.content}></div>
                <div className={styles.addToCart}>
                    <RemoveIcon
                        sx={{
                            fontSize: '16px',
                            pointerEvents: !count ? 'none' : 'initial',
                            mr: '12px',
                        }}
                        onClick={() => onRemove(id)}
                    />
                    <p>{count}</p>
                    <AddIcon
                        sx={{ fontSize: '16px', ml: '12px' }}
                        onClick={() => onAdd(id)}
                    />
                </div>
            </div>
            <Typography sx={{ margin: '8px 0' }}>{name}</Typography>
        </div>
    )
}

export default Card

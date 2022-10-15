import React, { useState } from 'react'
import History from '../../routes/History'
import { TextField, Paper, Typography, Button } from '@mui/material'

import styles from './index.module.scss'

function Login() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        if (user === 'koka' && password === 'always') {
            localStorage.setItem('token', 'admin-user')
            History.push('/products')
        } else {
            setUser('')
            setPassword('')
        }
    }

    return (
        <div className={styles.wrapper}>
            <Paper
                elevation={4}
                variant="elevation"
                square={true}
                sx={{
                    padding: '24px 32px',
                    borderRadius: '10px',
                    width: '320px',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h5" mb={2}>
                    Login
                </Typography>
                <TextField
                    size="small"
                    label="user name"
                    fullWidth={true}
                    autoFocus={true}
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    sx={{ my: 2 }}
                />
                <TextField
                    size="small"
                    label="password"
                    type="password"
                    helperText="After all this time!?"
                    fullWidth={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ my: 2, mb: 4 }}
                />
                <Button
                    sx={{ margin: '0 auto' }}
                    variant="outlined"
                    disabled={!(user && password)}
                    onClick={handleLogin}
                >
                    submit
                </Button>
            </Paper>
        </div>
    )
}

export default Login

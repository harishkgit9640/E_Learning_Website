import Typography from '@mui/material/Typography';
import React from 'react'

const Topheader = () => {
    return (
        <div>
            <Typography variant="body2" color="text.secondary" align="center">
                Date {new Date().toLocaleDateString()},
                Time {new Date().toLocaleTimeString()}
            </Typography>
        </div>
    )
}

export default Topheader

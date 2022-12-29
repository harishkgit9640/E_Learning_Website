import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
const Error = () => {
    return (
        <div>
            <Stack sx={{ width: '100%' }}>
                <Alert severity="error">Page Not Found!</Alert>
            </Stack>
        </div>
    )
}

export default Error

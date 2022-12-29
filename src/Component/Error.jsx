import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
const Error = () => {
    return (
        <div>
            <Stack sx={{ width: '100%' }}>
                <Alert severity="error">Page Not Found!</Alert>
                <Alert severity="success">This is a success alert — check it out!</Alert>
            </Stack>
        </div>
    )
}

export default Error

import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
const Error = () => {
    return (
        <div>
            <Stack sx={{ width: '100%' }}>
                <Alert severity="error">Page Not Found!</Alert>
                <Button className='btn btn-bg-primary'>  <Link to="/">Go To Home </Link> </Button>
            </Stack>
        </div>
    )
}

export default Error

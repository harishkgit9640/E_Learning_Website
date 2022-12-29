import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="col-md-6 col-sm-6 mx-auto">
                    <form method="post" action="#">
                        <div className="row g-3">
                            <div className="col-12">
                                <Box component="form" sx={{ '& > :not(style)': { mt: 5, width: '100%' }, }} noValidate autoComplete="off" >
                                    <TextField id="input_name" label="Full Name" variant="outlined" />
                                </Box>
                            </div>
                            <div className="col-12">
                                <Box component="form" sx={{ '& > :not(style)': { mt: 1, width: '100%' }, }} noValidate autoComplete="off" >
                                    <TextField id="input_name" label="E-mail" variant="outlined" />
                                </Box>
                            </div>
                            <div className="col-12">
                                <Box component="form" sx={{ '& > :not(style)': { mt: 1, width: '100%' }, }} noValidate autoComplete="off" >
                                    <TextField id="input_name" label="Mobile Number" variant="outlined" />
                                </Box>
                            </div>
                            <div className="col-12">
                                <Box component="form" sx={{ '& > :not(style)': { mt: 1, width: '100%' }, }} noValidate autoComplete="off" >
                                    <TextField id="outlined-multiline-static" label="Message" multiline rows={4} />
                                </Box>
                            </div>
                            <div className="col-12">
                                <Button variant="contained">Submit</Button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Contact

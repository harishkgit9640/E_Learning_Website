import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const Contact = () => {

    const submitForm = () => {
        <>
            <Alert severity="error">Page Not Found!</Alert>
            <Alert severity="success">This is a success alert — check it out!</Alert>
        </>
    }


    return (
        <>
            <div className="container mt-2">
                <div className="jumbotron">
                    <h1 className="text-center text-primary">CONTACT US</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut quae voluptatum dolore
                        iste ullam quibusdam esse nostrum harum quam omnis dolor, tenetur officiis dolores dolorum delectus,
                        veniam illum quasi.</p>
                </div>
            </div>
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
                                <Button onClick={submitForm} variant="contained">Submit</Button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Contact

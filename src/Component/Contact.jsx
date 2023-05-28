import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
        fullName: "", email: "", number: "", message: ""
    });
    const handleInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setData((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "http://127.0.0.1:5000/contact",
            data: data
        }).then(() => {
            alert("Your Message have been sent Successfully..");
            navigate("/home");
        })

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
                                    <TextField id="input_name" name="fullName" value={data.fullName}
                                        onChange={handleInput} label="Full Name" variant="outlined" />
                                </Box>
                            </div>
                            <div className="col-12">
                                <Box component="form" sx={{ '& > :not(style)': { mt: 1, width: '100%' }, }} noValidate autoComplete="off" >
                                    <TextField id="input_name" name="email" value={data.email}
                                        onChange={handleInput} label="E-mail" variant="outlined" />
                                </Box>
                            </div>
                            <div className="col-12">
                                <Box component="form" sx={{ '& > :not(style)': { mt: 1, width: '100%' }, }} noValidate autoComplete="off" >
                                    <TextField id="input_name" name="number" value={data.number}
                                        onChange={handleInput} label="Mobile Number" variant="outlined" />
                                </Box>
                            </div>
                            <div className="col-12">
                                <Box component="form" sx={{ '& > :not(style)': { mt: 1, width: '100%' }, }} noValidate autoComplete="off" >
                                    <TextField id="outlined-multiline-static" name="message" value={data.message}
                                        onChange={handleInput} label="Message" multiline rows={4} />
                                </Box>
                            </div>
                            <div className="col-12">
                                <Button onClick={handleSubmit} variant="contained">Submit</Button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Contact

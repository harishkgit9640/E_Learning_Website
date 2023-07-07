import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Footer from './Footer';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigator = useNavigate();
    const [user, setUser] = useState([]);
    const [cookies] = useCookies();
    useEffect(() => {
        if (cookies["userName"] === undefined) {
            navigator("/login");
        }
        axios({
            method: "get",
            url: "http://127.0.0.1:5000/users"
        })
            .then(response => {
                setUser(response.data);
            })
    }, []);

    return (
        <div>
            <div className="container mt-5">
                <div className="header text-center my-5">
                    <h1>Dashboard</h1>
                    <hr />
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">First Name</TableCell>
                                <TableCell align="left">Last Name</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">Password</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {user.map((data) => (
                                <TableRow
                                    key={data._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell align="left">{data.firstName}</TableCell>
                                    <TableCell align="left">{data.lastName}</TableCell>
                                    <TableCell align="left">{data.email}</TableCell>
                                    <TableCell align="left">{data.password}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Footer />
        </div>
    );
}

export default Home;

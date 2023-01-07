import React from 'react';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="py-2 ">
                <Typography variant="body2" color="text.secondary" align="center">
                    © Copyright {new Date().getFullYear()} All rights reserved
                    <NavLink to="http:/hksolution.in/" target="_blank"> HK SOLUTION </NavLink>

                </Typography>
            </footer>
        </div>
    );
};

export default Footer;

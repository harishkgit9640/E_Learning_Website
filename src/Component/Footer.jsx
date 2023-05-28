import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="py-2 ">
                <Typography variant="body2" color="text.secondary" align="center">
                    © Copyright {new Date().toDateString()} All rights reserved
                    <Link to="https:/hksolution.in/" target="_blank"> HK SOLUTION </Link>

                </Typography>
            </footer>
        </div>
    );
};

export default Footer;

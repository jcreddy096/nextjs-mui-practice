
import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

const AreaChart = dynamic(() => import('../components/AreaChart'), { ssr: false });

const AreaChartPage = () => {
    return (
        <Container>
            <Box>
                <Typography variant="h4" component="h1" gutterBottom>
                Movie Tickets
                </Typography>
                <AreaChart />
            </Box>
        </Container>
    );
};

export default AreaChartPage;

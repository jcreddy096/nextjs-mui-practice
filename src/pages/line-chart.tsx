
import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

const LineChart = dynamic(() => import('../components/LineChart'), { ssr: false });

const LineChartPage = () => {
    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                January month Avg Temp Changes by Hrs
                </Typography>
                <LineChart />
            </Box>
        </Container>
    );
};

export default LineChartPage;

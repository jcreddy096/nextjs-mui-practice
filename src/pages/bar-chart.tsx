
import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

const BarChart = dynamic(() => import('../components/BarChart'), { ssr: false });

const BarChartPage = () => {
    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                Student Marks
                </Typography>
                <BarChart />
            </Box>
        </Container>
    );
};

export default BarChartPage;

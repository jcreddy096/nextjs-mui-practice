
import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

const PieChart = dynamic(() => import('../components/PieChart'), { ssr: false });

const PieChartPage = () => {
    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Fav Sports
                </Typography>
                <PieChart />
            </Box>
        </Container>
    );
};

export default PieChartPage;

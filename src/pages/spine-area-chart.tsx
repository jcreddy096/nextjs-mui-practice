
import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

const SpineAreaChartChart = dynamic(() => import('../components/SpineAreaChart'), { ssr: false });

const SpineAreaChartPage = () => {
    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Price Chart
                </Typography>
                <SpineAreaChartChart />
            </Box>
        </Container>
    );
};

export default SpineAreaChartPage;

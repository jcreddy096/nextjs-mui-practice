import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import AreaChart from '../components/AreaChart';

export default function AreaChartPage() {
  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom>
        Area Chart
      </Typography>
      <Box className="chart-container">
        <AreaChart />
      </Box>
    </Container>
  );
}

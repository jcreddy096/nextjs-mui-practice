import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import PieChart from '../components/PieChart';

export default function PieChartPage() {
  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom>
        Pie Chart
      </Typography>
      <Box className="chart-container">
        <PieChart />
      </Box>
    </Container>
  );
}

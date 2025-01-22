import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import LineChart from '../components/LineChart';

export default function LineChartPage() {
  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom>
        Line Chart
      </Typography>
      <Box className="chart-container">
        <LineChart />
      </Box>
    </Container>
  );
}

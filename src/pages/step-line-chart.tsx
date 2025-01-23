import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import StepLineChart from '../components/StepLineChart';

export default function StepLineChartPage() {
  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom>
        Step Line Chart
      </Typography>
      <Box className="chart-container">
        <StepLineChart />
      </Box>
    </Container>
  );
}

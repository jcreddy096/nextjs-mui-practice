import * as React from 'react';
import { Container, Typography } from '@mui/material';
import StepLineChart from '../components/StepLineChart';

export default function StepLineChartPage() {
  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom>
        Step Line Chart
      </Typography>
      <div className="chart-container">
        <StepLineChart />
      </div>
    </Container>
  );
}

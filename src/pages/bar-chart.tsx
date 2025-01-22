import * as React from 'react';
import { Container, Typography } from '@mui/material';
import BarChart from '../components/BarChart';

export default function BarChartPage() {
  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom>
        Bar Chart
      </Typography>
      <div className="chart-container">
        <BarChart />
      </div>
    </Container>
  );
}

import * as React from 'react';
import { Container, Typography } from '@mui/material';
import AreaChart from '../components/AreaChart';

export default function AreaChartPage() {
  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom>
        Area Chart
      </Typography>
      <div className="chart-container">
        <AreaChart />
      </div>
    </Container>
  );
}

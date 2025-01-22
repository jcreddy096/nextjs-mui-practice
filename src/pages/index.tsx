import * as React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

export default function Home() {
  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Apex Chart
      </Typography>
      <Box className="chart-container">
        <Typography variant="h6">
          <Link href="/line-chart" color="inherit">Line Chart</Link>
        </Typography>
      </Box>
      <Box className="chart-container">
        <Typography variant="h6">
          <Link href="/step-line-chart" color="inherit">Step Line Chart</Link>
        </Typography>
      </Box>
      <Box className="chart-container">
        <Typography variant="h6">
          <Link href="/pie-chart" color="inherit">Pie Chart</Link>
        </Typography>
      </Box>
      <Box className="chart-container">
        <Typography variant="h6">
          <Link href="/bar-chart" color="inherit">Bar Chart</Link>
        </Typography>
      </Box>
      <Box className="chart-container">
        <Typography variant="h6">
          <Link href="/area-chart" color="inherit">Area Chart</Link>
        </Typography>
      </Box>
    </Container>
  );
}

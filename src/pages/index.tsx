import React from 'react';
import { Container, Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';

const HomePage = () => {
    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to ApexCharts
                </Typography>

                <List>
                    <Link href="/area-chart" passHref>
                        <ListItem >
                            <ListItemText primary="Area Chart" />
                        </ListItem>
                    </Link>

                    <Link href="/bar-chart" passHref>
                        <ListItem >
                            <ListItemText primary="Bar Chart" />
                        </ListItem>
                    </Link>

                    <Link href="/line-chart" passHref>
                        <ListItem >
                            <ListItemText primary="Line Chart" />
                        </ListItem>
                    </Link>

                    <Link href="/pie-chart" passHref>
                        <ListItem >
                            <ListItemText primary="Pie Chart" />
                        </ListItem>
                    </Link>

                    <Link href="/step-line-chart" passHref>
                        <ListItem >
                            <ListItemText primary="Step Line Chart" />
                        </ListItem>
                    </Link>

                    <Link href="/spine-area-chart" passHref>
                        <ListItem >
                            <ListItemText primary="Spine Area Chart" />
                        </ListItem>
                    </Link>

                </List>
            </Box>
        </Container>
    );
};

export default HomePage;

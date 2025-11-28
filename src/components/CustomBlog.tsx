import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface BlogProps {
    icon: React.ReactElement,
    title: string,
    description: string
}

const Blog = ({ icon, title, description }: BlogProps) => (
    <Box>
        <CardContent>
            <Box display={'flex'} flexDirection={'row'} gap={'1rem'}>
                {icon}
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {title}
                </Typography>
            </Box>
            <Typography variant="body2">
                {description}
            </Typography>
        </CardContent>
    </Box>
);

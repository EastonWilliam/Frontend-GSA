import React, { ReactElement, useState } from 'react'

import type { BoxProps, SxProps, Theme } from '@mui/material'
import { useTheme, Box, Typography, Button, Stack, TextField } from '@mui/material'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

interface ServiceCardProps extends Omit<BoxProps, 'component'> {
    title: string
    buttonLabel: string
    img: React.ReactElement
    sx?: SxProps<Theme>
}
interface NewsCardProps {
    title: string,
    date: Date,
    img: string,
    sx?: SxProps
}

interface GradingCardProps {
    title: string
    description: string
    img: string
    sx?: SxProps
}

interface TrackingCardProps {
    title: string
    PriceInput: ReactElement[]
    subtitle: string
    description: string
    sx?: SxProps
}

interface TrackingBlogProps {
    title: string
    img: string
    description: string
    sx?: SxProps
}

export const NewsCard = ({ title, date, img, sx = {}, ...props }: NewsCardProps) => {

    return (
        <Card sx={{ ...sx }} {...props}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="News"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {date.toString()}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export const ServiceCard = ({ title, buttonLabel, img, sx = {}, ...props }: ServiceCardProps) => {
    const theme = useTheme()
    const mode = theme.palette.mode

    const bgConfig: SxProps<Theme> = {
        background: mode === 'dark' ? theme.palette.background.paper : '#2b2929ff',
        boxShadow:
            mode === 'dark'
                ? '0 4px 6px -1px rgba(0,0,0,0.5), 0 2px 4px -1px rgba(0,0,0,0.4)'
                : '0 4px 10px rgba(0,0,0,0.06)',
        borderRadius: 2,
        p: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 2
    }

    return (
        <Box
            sx={{
                ...bgConfig,
                ...sx
            }}
            {...props}
        >
            <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" fontWeight={600}>
                    {title}
                </Typography>
                <Button variant={mode === 'dark' ? 'contained' : 'outlined'}>{buttonLabel}</Button>
            </Box>
            <Box sx={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {img}
            </Box>

        </Box>
    )
}
export const GradingCard = ({ title, description, img, sx = {}, ...props }: GradingCardProps) => {
    return (
        <Card sx={{ ...sx }} {...props}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="News"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                    <Button>Start Now</Button>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export const TrackingCard = ({ title, description, subtitle, PriceInput, sx = {}, ...props }: TrackingCardProps) => {
    return (
        <Card sx={{ ...sx }} {...props}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Box>
                        {PriceInput.map((item) => {
                            return (item)
                        })}
                    </Box>
                    <Button>{subtitle}</Button>
                    <Typography>{description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export const TrackingBlog = ({ title, img, description, sx = {}, ...props }: TrackingBlogProps) => {
    return (
        <Box display={'flex'} flexDirection={'column'} >
            <Box component={'img'} src={img} sx={{ mt: '-100px' }}></Box>
            <Box sx={{ ...sx }} {...props}>
                <Typography>
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </Box>
        </Box>

    )
}

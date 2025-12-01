import React, { ReactElement, useState } from 'react'

import type { BoxProps, SxProps, Theme } from '@mui/material'
import { useTheme, Box, Typography, Button, Stack, TextField } from '@mui/material'


interface InputButtonProps {
  price: string | number,
  label: string,
  prefix: string
  sx?: SxProps
}

interface LogoButtonProps {
  img: string,
  width: string | number,
  height: string | number
}

export const InputButton = ({ price, label, prefix, sx = {}, ...props }: InputButtonProps) => {
  const [budget, setBudget] = useState(price);
  const update = () => {
    setBudget(budget)
  }
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      sx={{
        ...sx
      }}
      {...props}>
      <Box display={'flex'} flexDirection={'row'}>
        <Typography>$</Typography>
        <TextField value={budget} onChange={update}></TextField>
      </Box>
      <Typography>{label}</Typography>
    </Stack>
  )
}

export const LogoButton = ({ img, width, height }: LogoButtonProps) => {
  return (
    <Box width={width} height={height}>
      <img src={img}></img>
    </Box>
  )
}

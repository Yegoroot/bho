import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import { General } from 'src/@types/interfaces'

interface Props {
  general : General
}

export const Footer = (props: Props) => {
  const { general } = props

  return (
    <Box
      sx={{
        py: 3,
        px: 2,
        mt: 7,
        backgroundColor: (theme) => (theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800]),
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          ©
          {' '}
          {general.title}
        </Typography>
        {general.contacts.map((contact) => contact.link)}
      </Container>
    </Box>

  )
}

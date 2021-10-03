import Image from 'next/image'
import { Typography, Grid } from '@mui/material'
import fetch from 'isomorphic-unfetch'

import OurServices from 'components/OurServices'
import { BaseProps, General } from 'src/interfaces'
import homeImage from 'public/images/mosque.png'

interface Props extends BaseProps {
  general: General
}

export default function Home(props: Props) {
  const { general } = props

  return (

    <main>

      <Grid sx={{
        display: 'grid',
        gap: 3,
        gridTemplateColumns: {
          xs: '1fr',
          lg: '1fr minmax(auto, 450px)'
        },
      }}
      >
        <Grid>
          <Typography variant="h1">{general.title}</Typography>
          <Typography variant="subtitle1">{general.description}</Typography>
        </Grid>

        <Image
          src={homeImage}
          alt={general.title}
        />
      </Grid>
      <OurServices />

    </main>

  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/general`)
  const general: General = await res.json()

  return {
    props: {
      general
    },
  }
}

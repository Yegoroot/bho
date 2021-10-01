import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

// @ts-ignore
const OurServices = () => {
  const useStyles = makeStyles((theme: Theme) => ({
    rtt: {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(2)
    }
  }))

  const styles = useStyles()

  return (
    <div className={styles.rtt}>
      --OurService
      --OurService

    </div>
  )
}

export default OurServices

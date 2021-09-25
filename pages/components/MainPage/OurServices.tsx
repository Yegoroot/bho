import { makeStyles, Theme } from '@mui/styles'

// @ts-ignore
const OurServices = () => {
  const useStyles = makeStyles((theme: Theme) => ({
    rtt: {
      background: theme.palette.primary.main,

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

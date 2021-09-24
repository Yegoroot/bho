import { makeStyles, Theme } from '@material-ui/core/styles'

const OurServices = () => {
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      background: theme.palette.primary.main,

    }
  }))

  const styles = useStyles()

  return (
    <div className={styles.root}>
      --OurService
    </div>
  )
}

export default OurServices

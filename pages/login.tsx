import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const { t } = useTranslation()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [biography, setBiography] = useState("");

    const registerUser = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log(11)

        const res = await fetch('/api/user/auth', {
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const result = await res.json()
        debugger
        console.log(result)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form}
                    onSubmit={registerUser}
                    noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                label={t('common:email')}
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                       
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label={t('common:password')}
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {t('common:signup')}
                    </Button>
                </form>
            </div>
        </Container>
    );
}
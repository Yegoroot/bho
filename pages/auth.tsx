import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react';
import Router from 'next/router'
import { NextApiResponse } from 'next';

// interface IUserResponse extends NextApiResponse {
//     user: any
// }

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

        const res: NextApiResponse = await fetch('/api/user/registr', {
            body: JSON.stringify({
                name,
                email,
                number,
                password,
                biography,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        let resData: any = await res.json()
        debugger
        if (res.ok && resData.token) {
            localStorage.setItem('login', 'true');
            localStorage.setItem('token', resData.token);
            console.log(1)
            Router.push('/')
        }
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
                                autoComplete="fname"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                onChange={e => setName(e.target.value)}
                                value={name}
                                label={t('common:name')}
                                autoFocus
                            />
                        </Grid>
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
                                id="number"
                                onChange={e => setNumber(e.target.value)}
                                value={number}
                                label={t('common:number')}
                                name="number"
                                autoComplete="number"
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
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label={t('common:biography')}
                                fullWidth
                                multiline
                                onChange={e => setBiography(e.target.value)}
                                value={biography}
                                rows={6}
                                variant="outlined"
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
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                {t('common:signInTip')}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import { Grid, Stack, TextField, InputAdornment, Button, Box } from '@mui/material'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'
import { AuthContextProv } from '../context/AuthContext';
import { useContext } from 'react';
// import { toastSuccessNotify } from '../helper/helper';
import Eagle from '../assets/kartal_transparent.png';

const Login = () => {
    const navigate = useNavigate()
    const { signIn } = useContext(AuthContextProv)
    return (
        <div style={{ margin: "2rem 5rem" }}>
            <Grid style={{ width: '25rem', backgroundColor: 'whitesmoke', padding: '2rem', borderRadius: '0.75rem', boxShadow: '18px 18px 25px black' }} >
                <Box style={{ textAlign: 'center', mb: 2 }}>
                    <img className='blogimg' src={Eagle} alt="Eagle" />
                    <h3>- Login -</h3>
                </Box>
                <Formik
                    initialValues={{ username: '', email: '', password: '' }}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().max(25, 'You must enter a maximum of 25 characters').required('User Name information must be filled'),
                        email: Yup.string().email('Please enter a valid e-mail address').required('e-mail information must be filled').matches(/([\w._%+-]+@[\w.-]+\.[a-zA-Z]{0,4})/, 'Such as : asdf@dfgv.com'),
                        password: Yup.string().min(8).max(16).required('Password information must be filled').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
                    })
                    }
                    onSubmit={(values, action) => {
                        const userInfo = {
                            "username": values.username,
                            "email": values.email,
                            "password": values.password,
                        }
                        // createUser(values.username, values.email, values.firstName, values.lastName, values.profile_pic, values.biography, values.password, values.password1);
                        signIn(userInfo, navigate);
                        action.resetForm();
                        action.setSubmitting(false);
                        // toastSuccessNotify('Logined successfully')
                    }}
                >
                    {({ values, handleChange, errors, touched, handleBlur }) => (
                        <Form>
                            <Stack spacing={4} direction='column' >
                                <TextField
                                    label='User Name'
                                    variant='outlined'
                                    id='username'
                                    type='text'
                                    name='username'
                                    value={values.username}
                                    onChange={handleChange}
                                    placeholder='User Name'
                                    onBlur={handleBlur}
                                    helperText={touched.username && errors.username}
                                    error={touched.username && Boolean(errors.username)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start' >
                                                <BadgeTwoToneIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    label='E-mail'
                                    variant='outlined'
                                    id='email'
                                    type='email'
                                    name='email'
                                    placeholder='e-mail'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.email && errors.email}
                                    error={touched.email && Boolean(errors.email)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start' >
                                                <AlternateEmailSharpIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <TextField
                                    label='Password'
                                    type='password'
                                    variant='outlined'
                                    value={values.password}
                                    name='password'
                                    onChange={handleChange}
                                    placeholder='Password'
                                    onBlur={handleBlur}
                                    helperText={touched.password && errors.password}
                                    error={touched.password && Boolean(errors.password)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start' >
                                                <KeySharpIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <Button variant='contained' type='submit' value='Submit' >Login</Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>
            </Grid>
        </div>

    )
}

export default Login
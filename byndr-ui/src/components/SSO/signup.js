import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextMaskCustom from './textmaskcustom';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';


const styles = (theme) => ({
    title: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5)
    },
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[10],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.title} {...other}>
            <Typography variant="h4">{children}</Typography>
        </MuiDialogTitle>
    );
});

const DialogCheckBox = withStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(0.5),
    },
}))(MuiDialogContent);

const DialogContent = withStyles((theme) => ({
    root: {
        padding: '0.5rem 4rem',
        textAlign: 'center'
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        padding: '0.5rem 4rem',

        // padding: theme.spacing(0.5),
    },
}))(MuiDialogActions);

export default function Signup() {
    const [open] = React.useState(true);

    const [values, setValues] = React.useState({
        phoneNumber: "",
        password: "",
        email: "",
        confirmPassword: "",
        showPassword: false,
        showConfirmPassword: false,
        checked: false,
    });

    const [errors, setErrors] = React.useState({
        messageEmail: "",
    });

    const [messagePassword, setMessagePassword] = React.useState("");

    const [messagePhone, setMessagePhone] = React.useState("");

    const [messageTnC, setMessageTnC] = React.useState("");

    let isValid = true;


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    function validate() {

        //validate phone

        if (values.phoneNumber) {
            let mobilenumber = values.phoneNumber.trim().split(/\s*-\s*/);
            let numberarray = mobilenumber[0].concat(mobilenumber[1]);
            numberarray.split();
            // console.log(numberarray);
            // console.log(numberarray.length);

            if (numberarray.length !== 13) {
                isValid = false;
                setMessagePhone("Mobile number must contain 10 digits only.");
            }

            else {
                setMessagePhone("");

            }
        }

        else if (!values.phoneNumber) {
            isValid = false;
            setMessagePhone("please enter a valid mobile number");
        }

        // validate email

        if (values.email) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(values.email)) {
                isValid = false;
                setErrors({ ...errors, messageEmail: "Please enter valid email address." });

            }
            else if (pattern.test(values.email)) {
                setErrors({ ...errors, messageEmail: "" });
            }
        }

        else if (!values.email) {
            isValid = false;
            setErrors({ ...errors, messageEmail: "Please enter valid email address." });
        }

        // validate password
        if (values.password && values.confirmPassword) {
            (values.password !== values.confirmPassword) ? setMessagePassword("password doesnot match") : setMessagePassword("");
        }

        else if (!values.password || !values.confirmPassword) {
            setMessagePassword("password and confirm password field cannot be left empty");
        }

        //  validate TnC
        if (values.checked) {
            setMessageTnC("");
        }
        else {
            setMessageTnC("Please accept our T & C");
            isValid= false;
        }
        // (values.checked) ? setMessageTnC("") : setMessageTnC("Please accept our T & C");
    }


    function handleSubmit() {
        validate();
        if (isValid) {
            console.log(isValid, "i am inside callback !!! hurray");

        }

        console.log(isValid, "i am inside");
    }


    const handleClickShowPassword = (prop) => () => {
        if (values.password && prop === 'showPassword')
            setValues({ ...values, [prop]: !values.showPassword });
        else if (values.confirmPassword && prop === 'showConfirmPassword')
            setValues({ ...values, [prop]: !values.showConfirmPassword });
        else
            setValues({ ...values, [prop]: !values.checked });
    };


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div style={{ filter: `blur(5px)` }}>
            <Dialog aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title">
                    Sign Up
                </DialogTitle>
                <DialogContent >

                    <FormControl variant="outlined" style={{ width: '23rem' }} required>
                        <InputLabel margin="dense" htmlFor="component-outlined" style={{ fontSize: 'small' }}>Mobile Number</InputLabel>
                        <OutlinedInput
                            inputProps={{
                                style: {
                                    height: "0.5rem"
                                }
                            }}
                            value={values.phoneNumber}
                            onChange={handleChange('phoneNumber')}
                            label="Mobile Number"
                            name="textmask"
                            id="formatted-text-mask-input"
                            inputComponent={TextMaskCustom}
                            size="small"
                            autoFocus
                            margin="dense"
                        />
                        <Typography style={{ color: 'red', fontSize: "x-small" }}>{messagePhone}</Typography>
                    </FormControl>
                </DialogContent>

                <DialogContent>
                    <FormControl variant="outlined" style={{ width: '23rem' }}>
                        <InputLabel margin="dense" htmlFor="component-outlined" style={{ fontSize: 'small' }}>Email Address</InputLabel>
                        <OutlinedInput
                            inputProps={{
                                style: {
                                    height: "0.5rem"
                                }
                            }}
                            value={values.email}
                            onChange={handleChange('email')}
                            label="Email Address"
                            type="email"
                            id="outlined-margin-none"
                            variant="outlined"
                            margin="dense"

                        />

                    </FormControl>
                    <Typography style={{ color: 'red', fontSize: "x-small" }}>{errors.messageEmail}</Typography>
                </DialogContent>

                <DialogContent>
                    <FormControl variant="outlined" style={{ width: "23rem" }}>
                        <InputLabel margin="dense" htmlFor="component-outlined" style={{ fontSize: 'small' }}>Create Password</InputLabel>
                        <OutlinedInput
                            inputProps={{
                                style: {
                                    height: "0.5rem"
                                }
                            }}
                            value={values.password}
                            onChange={handleChange('password')}
                            label="Create Password"
                            type={values.showPassword ? 'text' : 'password'}
                            id="outlined-adornment-password"
                            variant="outlined"
                            margin="dense"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword('showPassword')}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="small"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}

                        />
                    </FormControl>
                </DialogContent>

                <DialogContent>
                    <FormControl variant="outlined" style={{ width: "23rem" }}>
                        <InputLabel margin="dense" htmlFor="component-outlined" style={{ fontSize: 'small' }}>Confirm Password</InputLabel>
                        <OutlinedInput
                            inputProps={{
                                style: {
                                    height: "0.5rem"
                                }
                            }}
                            value={values.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            type={values.showConfirmPassword ? 'text' : 'password'}
                            label="Confirm Password"
                            id="outlined-adornment-confirm-password"
                            variant="outlined"
                            margin="dense"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword('showConfirmPassword')}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="small"
                                    >
                                        {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <Typography style={{ color: 'red', fontSize: "x-small" }}>{messagePassword}</Typography>
                </DialogContent>

                <DialogCheckBox>
                    <FormControl style={{ width: '2rem' }}>
                        <Checkbox
                            // defaultChecked
                            // color="primary"
                            color="default"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                            onClick={() => setValues({ ...values, checked: !values.checked })}
                        />
                    </FormControl>
                    <FormControl >
                        <Typography
                            variant="subtitle2"
                            gutterBottom={true}
                            style={{ marginTop: '0.7rem' }}
                            align="right"
                        >I accept all the <a href="xyz">Terms & conditions</a> and <a href="xyz">Privacy ploicy</a></Typography>
                    </FormControl>
                </DialogCheckBox>

                <Typography style={{ color: 'red', fontSize: "x-small", display: "flex", justifyContent: "center" }}>{messageTnC}</Typography>

                <DialogActions>
                    <Button style={{ width: '65%' }} variant="contained" size="large" color="primary" onClick={handleSubmit}>
                        Sign Up
          </Button>
                </DialogActions>
                <DialogActions style={{ marginBottom: '2rem' }}>
                    <a href="/login">Log In instead</a>
                </DialogActions>
            </Dialog>
        </div>
    );
}

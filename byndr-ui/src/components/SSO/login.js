import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
// import FormHelperText from '@material-ui/core/FormHelperText';
import VisibilityOutlined from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlined from '@material-ui/icons/VisibilityOffOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import InfoIcon from '@material-ui/icons/Info';

const styles = (theme) => ({
    title: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 60,
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
    }
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
        justifyContent: 'start',
        // paddingTop: theme.spacing(0.5),
        padding: '0.5rem 3.7rem'
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


const mainClasses = makeStyles((theme) => ({
    customPaper: {
        borderRadius: 16,
        maxWidth: 580
    },
    linkCls: {
        color: "#757575"
    },
    linkforget: {
        color: 'rgb(55, 104, 237)'
    },
    '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgb(138 138 138 / 23 %)'
    },
    '.MuiIconButton-root': {
        color: 'rgb(138 138 138 / 23 %) !important'
    },
    inputBox: {
        minHeight: 44
    }
}));


export default function Login() {

    const [open] = React.useState(true);

    const [values, setValues] = React.useState({
        phoneNumber: "",
        password: "",
        email: "",
        showPassword: false,
        checked: false,
    });

    const [errors, setErrors] = React.useState({
        messageEmail: "",
    });

    // const [messagePassword, setMessagePassword] = React.useState("");

    const [messagePhone, setMessagePhone] = React.useState("");


    let isValidMobileNumber = true;
    let isValidEmail = true;


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    function validate() {

        //validate phone
        console.log(values.phoneNumber);
        if (values.phoneNumber) {
            let mobilenumber = values.phoneNumber.trim().split(/\s*-\s*/);
            let numberarray = mobilenumber[0].concat(mobilenumber[1]);
            numberarray.split();
            console.log(numberarray);
            console.log(numberarray.length);

            if (numberarray.length !== 13 && values.email === "") {
                isValidMobileNumber = false;
                setMessagePhone("Mobile number must contain 10 digits only.");
            }

            else {
                setMessagePhone("");

            }
        }

        else if (values.phoneNumber === "" && values.email === "") {
            isValidMobileNumber = false;
            setMessagePhone("please enter a valid mobile number");
            setErrors({ ...errors, messageEmail: "Account with this email does not exit! Please Check your Username, pjone number or email adress just in case " });

        }



        // validate email

        if (values.email) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(values.email)) {
                isValidEmail = false;
                setErrors({ ...errors, messageEmail: "Please enter valid email address." });

            }
            else if (pattern.test(values.email)) {
                setErrors({ ...errors, messageEmail: "" });
            }
        }

        // else if (values.email && values.phoneNumber === "") {
        //     isValidEmail = false;
        //     setErrors({ ...errors, messageEmail: "Please enter valid email address." });
        // }

        else if (values.email === "" && values.phoneNumber !== "") {
            setErrors({ ...errors, messageEmail: "" });
        }

        else if (values.phoneNumber === "" && values.email !== "") {
            setMessagePhone("");
        }

        // validate password
        // if (values.password && values.confirmPassword) {
        //     (values.password !== values.confirmPassword) ? setMessagePassword("password doesnot match") : setMessagePassword("");
        // }

    }


    function handleSubmit() {
        validate();
        if (isValidEmail || isValidMobileNumber) {
            console.log("i am inside callback !!! hurray");

        }

        console.log("i am outside");
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

    const classes = mainClasses()

    return (
        <div style={{ filter: `blur(5px)` }}>
            <Dialog aria-labelledby="customized-dialog-title" open={open} classes={{ paperScrollPaper: classes.customPaper }}>
                <DialogTitle id="customized-dialog-title">
                    Log In
                </DialogTitle>

                <DialogContent style={{ marginBottom: 10, overflowY: "unset" }}>
                    <FormControl variant="outlined" style={{ width: '100%' }}>
                        <InputLabel margin="dense" htmlFor="component-outlined" style={{ fontSize: '16px', lineHeight: '1.3', background: 'white', paddingRight: 10 }}>Email Address or Phone</InputLabel>
                        <OutlinedInput
                            value={values.email}
                            onChange={handleChange('email')}
                            label="Email Address"
                            type="text"
                            id="outlined-margin-none"
                            variant="outlined"
                            margin="dense"
                            className={classes.inputBox}
                        />

                    </FormControl>
                    {/* <Typography style={{ color: '#9a3d3db0', fontSize: 18, padding: "6px 50px 10px 6px", marginTop: 13, background: "#e8aeaea3", borderRadius: 4, textAlign: "left" }}><InfoIcon color="inherit" fontSize="small" style={{ fontSize: "1.6rem", float: "left", marginRight: 10 }} />
                       Account with this email does not exit!  <Typography component="p" style={{ paddingLeft: 35 }}>
                            Please Check your Username, pjone number or email adress just in case.
                        </Typography>
                    </Typography> */}
                </DialogContent>

                <DialogContent style={{ overflowY: "unset" }}>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                        <InputLabel margin="dense" htmlFor="component-outlined" style={{ fontSize: '16px', lineHeight: '1.3', background: 'white', paddingRight: 10 }}>Password</InputLabel>
                        <OutlinedInput
                            value={values.password}
                            onChange={handleChange('password')}
                            label="Password"
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
                                        size="12px"
                                    >
                                        {values.showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                            className={classes.inputBox}
                        />
                    </FormControl>
                    {/* <Typography style={{ color: '#9a3d3db0', fontSize: 18, padding: "6px 50px 10px 6px", marginTop: 13, background: "#e8aeaea3", borderRadius: 4, textAlign: "left" }}><InfoIcon color="inherit" fontSize="small" style={{ fontSize: "1.6rem", float: "left", marginRight: 10 }} />
                       Incorrect Password <Typography component="p" style={{ paddingLeft: 35 }}>
                            Check for caps lock. You never know!
                        </Typography>
                    </Typography> */}
                </DialogContent>

                <DialogCheckBox style={{ overflowY: "unset" }}>
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
                            style={{ marginTop: '0.7rem', marginRight: 10 }}
                            align="right"
                        ><span>Remember me </span> <a style={{ marginLeft: '8rem', textDecoration: "none" }} className={classes.linkforget} href="/forgotpassword">Forgot Username/Password? </a></Typography>
                    </FormControl>
                </DialogCheckBox>


                <DialogActions>
                    <Button style={{ backgroundColor: "#3768ed", color: "#fff", width: '250px', paddingTop: 8, paddingBottom: 8, textTransform: 'capitalize', fontSize: 20, marginBottom: 10, boxShadow: 'inherit' }} variant="contained" size="large" onClick={handleSubmit}>
                        Enter
          </Button>
                </DialogActions>
                <DialogActions style={{ marginBottom: '2rem' }}>
                    <a href="/signup" className={classes.linkCls}>Sign Up</a>
                </DialogActions>
            </Dialog>
        </div>
    );
}

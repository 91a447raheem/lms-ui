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
import { useState } from 'react';

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
    },
    btnSubmit: {
        backgroundColor: "#3768ed",
        color: "#fff",
        width: '250px',
        paddingTop: 8,
        paddingBottom: 8,
        textTransform: 'capitalize',
        fontSize: 20,
        marginBottom: 10,
        boxShadow: 'inherit',
        '&:hover': {
            backgroundColor: "#3768ed",
            color: "#fff",
            boxShadow: 'inherit',
        }
    },
    passLabel: {
        fontSize: '16px', lineHeight: '1.3', background: 'white', paddingRight: 10
    },
    errorBlock: {
        color: '#9a3d3db0', fontSize: 14, padding: "8px 16px", marginTop: 13, background: "#e8aeaea3", borderRadius: 4, textAlign: "left"
    },
    infoIconblock: {
        fontSize: 16, float: "left", marginTop: 2, marginRight: 8
    }
}));


export default function Login() {

    // const [open] = React.useState(true);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isPhone, setIsPhone] = useState(false)
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [attempCounter, setCounter] = useState(0)

    const logicCheckforUname = (val) => {
        let emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        let phoneNum = val.replace(/[^\d]/g, '');

        if (phoneNum.length > 6 && phoneNum.length < 11) {
            setIsPhone(true)
            setUsername(val)
            setUsernameError('')
        } else {
            setIsPhone(false)
            console.log("emailPattern.test(val)", emailPattern.test(val), val)
            if (val.length > 3 && !emailPattern.test(val)) {
                setUsernameError("Seems like you’ve entered an invalid email. Please try again.");
            } else {
                setUsername(val)
                setUsernameError('')
            }
        }

    }

    const handleChange = (e, field) => {

        if (field == "username") {
            logicCheckforUname(e.currentTarget.value)
        } else {
            setPasswordError('')
            setPassword(e.currentTarget.value)
        }

    }

    const handleCheckbox = () => {
        console.log("Handle Checkbox")
    }

    const handleSubmit = () => {
        console.log("API trigger Goes here", username, password, isPhone)

        if (false) {


        } else {

            setUsernameError("Seems you haven’t signed up yet. Please sign up first.")

            if (attempCounter >= 2) {
                setPasswordError("The password you’ve entered is incorrect. Would you like to reset your password ?")
            } else {
                setPasswordError("The password you’ve entered is incorrect. Please try again.")
            }
            setCounter(attempCounter + 1)
        } // if API success set the tokens and other things here

        // set this if the API failed with error msg
    }

    const classes = mainClasses()

    return (
        <div style={{ filter: `blur(5px)` }}>
            <Dialog aria-labelledby="customized-dialog-title" open={true} classes={{ paperScrollPaper: classes.customPaper }}>
                <DialogTitle id="customized-dialog-title">
                    Log In
                </DialogTitle>

                <DialogContent style={{ marginBottom: 10, overflowY: "unset" }}>
                    <FormControl variant="outlined" style={{ width: '100%' }}>
                        <InputLabel margin="dense" htmlFor="component-outlined" style={{ fontSize: '16px', lineHeight: '1.3', background: 'white', paddingRight: 10 }}>Email Address or Phone</InputLabel>
                        <OutlinedInput
                            onChange={(e) => handleChange(e, "username")}
                            label="Email Address"
                            type="text"
                            id="outlined-margin-none"
                            variant="outlined"
                            margin="dense"
                            className={classes.inputBox}
                        />

                    </FormControl>
                    {usernameError ? <Typography className={classes.errorBlock}><InfoIcon color="inherit" fontSize="small" className={classes.infoIconblock} />
                        {usernameError}
                    </Typography> : null}
                </DialogContent>

                <DialogContent style={{ overflowY: "unset" }}>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                        <InputLabel margin="dense" htmlFor="component-outlined" className={classes.passLabel}>Password</InputLabel>
                        <OutlinedInput
                            onChange={(e) => handleChange(e, "password")}
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            id="outlined-adornment-password"
                            variant="outlined"
                            margin="dense"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                        size="12px"
                                    >
                                        {showPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            className={classes.inputBox}
                        />
                    </FormControl>
                    {passwordError ? <Typography className={classes.errorBlock}><InfoIcon color="inherit" fontSize="small" className={classes.infoIconblock} />
                        {passwordError}
                    </Typography> : null}
                </DialogContent>

                <DialogCheckBox style={{ overflowY: "unset" }}>
                    <FormControl style={{ width: '2rem' }}>
                        <Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                            onClick={handleCheckbox}
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
                    <Button variant="contained" size="large" className={classes.btnSubmit} onClick={handleSubmit}>
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

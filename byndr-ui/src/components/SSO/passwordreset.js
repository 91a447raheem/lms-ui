import React, { useState } from 'react';
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
import VisibilityOutlined from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlined from '@material-ui/icons/VisibilityOffOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
import InfoIcon from '@material-ui/icons/Info';

const styles = (theme) => ({
    title: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(2)
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

    },
}))(MuiDialogActions);


const mainClasses = makeStyles((theme) => ({
    customPaper: {
        borderRadius: 16,
        maxWidth: 540,
        width: '100%',
        paddingTop: 30,
        paddingBottom: 30
    },
    btnSubmit: {
        backgroundColor: "#3768ed",
        color: "#fff",
        width: '250px',
        paddingTop: 8,
        paddingBottom: 8,
        textTransform: 'capitalize',
        fontSize: 18,
        marginBottom: 10,
        boxShadow: 'inherit',
        marginBottom: 40,
        '&:hover': {
            backgroundColor: "#3768ed",
            color: "#fff",
            boxShadow: 'inherit',
        }
    },
    inputBox: {
        minHeight: 44
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


export default function Passwordreset() {
    const history = useHistory();

    const classes = mainClasses()

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [showConfirmpass, setShowConfirmpass] = useState(false)

    const [passError, setPassError] = useState('')
    const [confirmpassError, setConfirmpassError] = useState('')

    const unmatchedCheck = (val) => {
        if (password === val) {
            setConfirmpassError('')
        } else {
            setConfirmpassError('Looks like the passwords are not matching. Please try again.')
        }
    }

    const passwordPolicyCheck = (val) => {

        let passMatch = val.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)

        if (!passMatch && (val.length > 3)) {
            setPassError("Password must be a combination of lower case and upper case alphabets, must include at least one number and one special character, and must be at least eight characters long.")
        } else {
            setPassError('')
        }

    }

    const handleChange = (e, field) => {

        if (field == "password") {
            passwordPolicyCheck(e.target.value)
            setPassword(e.target.value)
        } else {
            unmatchedCheck(e.target.value)
            setConfirmPassword(e.target.value)
        }
    }

    const handleSubmit = () => {

        console.log("All fields", password, confirmPassword)
        // history.push('/login')
    }

    return (
        <div style={{ filter: `blur(5px)` }}>
            <Dialog aria-labelledby="customized-dialog-title" open={true} classes={{ paperScrollPaper: classes.customPaper }}>
                <DialogTitle id="customized-dialog-title">
                    Password Reset
                </DialogTitle>

                <Typography style={{ width: "400px", padding: "0px 50px", textAlign: "center", margin: "0px auto", fontSize: 18, color: "gray", display: 'flex', justifyContent: 'center' }} >
                    {`Use both lower and upper case characters, 1 number, 1 special character and at least 8 character in your password`}
                </Typography>

                <DialogContent style={{ marginTop: 30, marginBottom: 20, overflowY: "unset" }}>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                        <InputLabel margin="dense" htmlFor="component-outlined" style={{ fontSize: '16px', lineHeight: '1.3', background: 'white', paddingRight: 10 }}>Create Password</InputLabel>
                        <OutlinedInput
                            onChange={(e) => handleChange(e, 'password')}
                            label="Create Password"
                            type={showPass ? 'text' : 'password'}
                            id="outlined-adornment-password"
                            variant="outlined"
                            margin="dense"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPass(!showPass)}
                                        edge="end"
                                        size="small"
                                    >
                                        {showPass ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            className={classes.inputBox}
                        />
                    </FormControl>
                    {
                        passError ? <Typography className={classes.errorBlock}><InfoIcon color="inherit" fontSize="small" className={classes.infoIconblock} /> {passError}</Typography> : null
                    }
                </DialogContent>

                <DialogContent style={{ marginBottom: 20, overflowY: "unset" }}>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                        <InputLabel margin="dense" htmlFor="component-outlined" style={{ fontSize: '16px', lineHeight: '1.3', background: 'white', paddingRight: 10 }}>Confirm Password</InputLabel>
                        <OutlinedInput
                            onChange={(e) => handleChange(e, 'confirmpassword')}
                            type={showConfirmpass ? 'text' : 'password'}
                            label="Confirm Password"
                            id="outlined-adornment-confirm-password"
                            variant="outlined"
                            margin="dense"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowConfirmpass(!showConfirmpass)}
                                        edge="end"
                                        size="small"
                                    >
                                        {showConfirmpass ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            className={classes.inputBox}
                        />
                    </FormControl>
                    {
                        confirmpassError ? <Typography className={classes.errorBlock}><InfoIcon color="inherit" fontSize="small" className={classes.infoIconblock} /> {confirmpassError}</Typography> : null
                    }
                </DialogContent>

                <DialogActions>
                    <Button className={classes.btnSubmit} variant="contained" size="large" onClick={handleSubmit}>
                        Set New Password
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

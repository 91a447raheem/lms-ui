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
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";


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
        maxWidth: 580
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
        marginBottom:40,
        '&:hover': {
            backgroundColor: "#3768ed",
            color: "#fff",
            boxShadow: 'inherit',
        }
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
    const [open] = React.useState(true);

    const [values, setValues] = React.useState({
        password: "",
        confirmPassword: "",
        showPassword: false,
        showConfirmPassword: false,
    });



    const [messagePassword, setMessagePassword] = React.useState("");

    let isValid = true;


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    function validate() {

        // validate password
        if (values.password && values.confirmPassword) {
            if (values.password !== values.confirmPassword){
                setMessagePassword("password doesnot match");
                isValid = false;
            }
            else{
                setMessagePassword("");
            }
        }

        else if (!values.password || !values.confirmPassword) {
            isValid = false;
            setMessagePassword("password and confirm password field cannot be left empty");
        }
    }


    function handleSubmit() {
        validate();
        if (isValid) {
            console.log(isValid, "i am inside callback !!! hurray");
             history.push("/confirmpasswordchange");
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

    const classes = mainClasses()
    return (
        <div style={{ filter: `blur(5px)` }}>
            <Dialog aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title">
                    Password Reset
                </DialogTitle>

                <Typography style={{ width:"400px", padding:"0px 50px", textAlign:"center", margin:"0px auto", fontSize:18, color: "gray", display: 'flex', justifyContent: 'center' }} >
                    {`Use both lower and upper case characters, 1 number, 1 special character and at least 8 character in your password`}
                </Typography>

                <DialogContent style={{marginTop:10, marginBottom:10, overflowY:"unset"}}>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                        <InputLabel margin="dense" htmlFor="component-outlined" sstyle={{ fontSize: '16px',lineHeight:'1.3' }}>Create Password</InputLabel>
                        <OutlinedInput
                            inputProps={{
                                style: {
                                    height: "1.5rem"
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
                            className={classes.inputBox}
                        />
                    </FormControl>
                </DialogContent>

                <DialogContent style={{marginBottom:20, overflowY:"unset"}}>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                        <InputLabel margin="dense" htmlFor="component-outlined" style={{ fontSize: '16px',lineHeight:'1.3' }}>Confirm Password</InputLabel>
                        <OutlinedInput
                            inputProps={{
                                style: {
                                    height: "1.5rem"
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
                            className={classes.inputBox}
                        />
                    </FormControl>
                    <Typography className={classes.errorBlock}>password and confirm password field cannot be left empty
                        </Typography>
                </DialogContent>



                <DialogActions>
                    <Button className={classes.btnSubmit} variant="contained" size="large"  onClick={handleSubmit}>
                        Set New Password
          </Button>
                </DialogActions>
                {/* <DialogActions style={{ marginBottom: '2rem' }}>
                    <a href="/login">back</a>
                </DialogActions> */}
            </Dialog>
        </div>
    );
}

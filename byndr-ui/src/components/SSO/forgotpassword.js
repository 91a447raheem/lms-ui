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

export default function Forgotpassword() {
    const history = useHistory();

    const [open] = React.useState(true);

    const [values, setValues] = React.useState({
        email: "",
    });

    const [errors, setErrors] = React.useState({
        messageEmail: "",
    });


    let isValid = true;


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    function validate() {

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

        else if(!values.email){
            isValid = false;
            setErrors({ ...errors, messageEmail: "Please enter valid email address." });
        }
        else{
            setErrors({ ...errors, messageEmail: "" });

        }

    }


    function handleSubmit() {
        validate();
        if (isValid) {
            console.log(isValid, "i am inside callback !!! hurray");
            history.push("/checkemail");
        }

        console.log(isValid, "i am outside");

    }

    const classes = mainClasses()

    return (
        <div style={{ filter: `blur(5px)` }}>
            <Dialog aria-labelledby="customized-dialog-title" open={open} classes={{ paperScrollPaper: classes.customPaper }}>
                <DialogTitle id="customized-dialog-title" style={{textAlign:"center"}}>
                    Forgot Password? <br/> Take it easy
                </DialogTitle>

                <Typography style={{ fontSize:18, color: "gray", display: 'flex', justifyContent: 'center' }} >
                    {`A link will be sent to your email address`}
                </Typography>
                <Typography style={{ fontSize:18, color: "gray", display: 'flex', justifyContent: 'center' }} >
                    {`in order to complete new password setup.`}
                </Typography>

                <DialogContent style={{marginTop:10, marginBottom:10, overflowY:"unset"}}>
                    <FormControl variant="outlined" style={{ width: '400px' }}>
                        <InputLabel margin="dense" htmlFor="component-outlined" style={{ fontSize: '16px',lineHeight:'1.3' }}>Email Address</InputLabel>
                        <OutlinedInput
                            inputProps={{
                                style: {
                                    height: "1.4rem",
                                    borderColor:"#2d3542"
                                }
                            }}
                            value={values.email}
                            onChange={handleChange('email')}
                            label="Email Address"
                            type="email"
                            id="outlined-margin-none"
                            variant="outlined"
                            margin="dense"
                            className={classes.inputBox}
                        />

                    </FormControl>

                    <Typography className={classes.errorBlock}><InfoIcon color="inherit" fontSize="small" className={classes.infoIconblock} />
                    Please enter valid email address.
                        </Typography>
                </DialogContent>

                <DialogActions>
                    <Button className={classes.btnSubmit} variant="contained" size="large" onClick={handleSubmit}>
                        Submit
          </Button>
                </DialogActions>
                <DialogActions style={{ marginBottom: '2rem' }}>
                    <a href="/login" className={classes.linkCls}>Back</a>
                </DialogActions>
            </Dialog>
        </div>
    );
}

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import ByndrLogo from "../../img/byndLogo.png";


const styles = (theme) => ({
    title: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10
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

const DialogContent = withStyles((theme) => ({
    root: {
        padding: '0.5rem 4rem',
        textAlign: 'center',
        margin: '0.75rem 0 0 0 '
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        padding: '0.5rem 4rem',
        margin: '0 0 1rem 0'
    },
}))(MuiDialogActions);


const mainClasses = makeStyles((theme) => ({
    customPaper: {
        borderRadius: 16,
        maxWidth: 500,
        width: '100%'
    },
    btnSubmit: {
        width: 200,
        backgroundColor: "#3768ed",
        color: "#fff",
        textTransform: 'capitalize',
        fontSize: 18,
        marginBottom: 10,
        boxShadow: 'inherit',
        padding: '6px 20px',
        '&:hover': {
            backgroundColor: "#3768ed",
            color: "#fff",
            boxShadow: 'inherit',
        }
    },
    btnClose: {
        width: 200,
        backgroundColor: "#fff",
        color: "#4c4848",
        textTransform: 'capitalize',
        fontSize: 18,
        marginBottom: 10,
        border: "1px solid #4c4848",
        boxShadow: 'inherit',
        padding: '5px 20px',
        '&:hover': {
            backgroundColor: "#fff",
            color: "#4c4848",
            boxShadow: 'inherit',
        }
    },
    logo: {
        maxWidth: 240,
        margin: "0px auto",
        paddingTop: "50px !important"
    },
    linkCls: {
        color: "#757575"
    },
    actionBtns: {
        marginTop: 20
    },
    gotMailtxt: {
        fontSize: 18,
        textAlign: 'center'
    }
}));
export default function Passwordchangeconfirm() {

    const history = useHistory();

    const handleSubmit = () => {
        alert("handle Submit")
        history.push("/login");
    }

    const handleClose = () => {
        alert("handle Close")
        history.push("/login");
    }


    const classes = mainClasses()

    return (
        <div style={{ filter: `blur(5px)` }}>
            <Dialog aria-labelledby="customized-dialog-title" open={true} classes={{ paperScrollPaper: classes.customPaper }}>

                <DialogContent className={classes.logo}>
                    <img
                        alt="Travis Howard"
                        src={ByndrLogo}
                        style={{ width: "100%" }} />
                </DialogContent>

                <DialogTitle id="customized-dialog-title" className={classes.gotMailtxt}>
                    You've got mail!
                </DialogTitle>


                <DialogContent>
                    <Typography style={{ fontSize: 18, color: "gray", display: 'flex', justifyContent: 'center', marginBottom: 8 }} >
                        We've e-mailed you a link to change<br /> your password at
                    </Typography>
                    <Typography style={{ fontSize: 22, color: "#3868ed", display: 'flex', justifyContent: 'center' }} >
                        {`123456@example.com`}
                    </Typography>
                </DialogContent>

                <DialogContent>
                    <Typography style={{ color: "gray", display: 'flex', justifyContent: 'center' }} >
                        {`If You haven't received any mail yet,`}
                    </Typography>
                </DialogContent>

                <DialogActions className={classes.actionBtns}>
                    <Button variant="contained" size="large" color="primary" onClick={handleSubmit} className={classes.btnSubmit}>
                        Resend
                   </Button>
                    <Button className={classes.btnClose} variant="contained" size="large" color="primary" onClick={handleClose}>
                        Close
                   </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}

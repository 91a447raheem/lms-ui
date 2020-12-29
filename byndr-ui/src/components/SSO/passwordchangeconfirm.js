import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import MuiDialogContent from '@material-ui/core/DialogContent';


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

export default function Passwordchangeconfirm() {

    const history = useHistory();

    const [open] = React.useState(true);

    function handleSubmit() {
        console.log("i am inside callback !!! hurray");
        history.push("/login");
    }



    return (
        <div style={{ filter: `blur(5px)` }}>
            <Dialog aria-labelledby="customized-dialog-title" open={open}>

                <DialogContent>

                    <Typography style={{ color: "gray", display: 'flex', justifyContent: 'center' }} >
                        {`Check your email for confirmation link`}
                    </Typography>
                </DialogContent>


                <DialogActions>
                    <Button style={{ width: '45%' }} variant="contained" size="large" color="primary" onClick={handleSubmit}>
                        Okay
          </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}

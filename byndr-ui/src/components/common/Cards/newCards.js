import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {
    Button, TextField, Switch,
    FormControlLabel
} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        borderRradius: 15,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    card_title: {
        padding: 20,
        fontSize: 20,
        textAlign: "center",
        font: "normal normal medium 20px/27px Poppins",
        color: "#1956E3"
    },
    card_inputFiled: {
        background: "#F7F7F7 0% 0% no-repeat padding-box",
        border: "1px solid #0000001A",
        borderRadius: 10
    },
}));

export default function NewCards(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar
                        className={`${classes.large} ${classes.v_mar}`}
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                        style={{
                            padding: "20px",
                            marginLeft: "90px"
                        }}
                    />

                }
            />

            <CardContent>
                <Typography variant="body2" className={classes.card_title} component="p">
                    {props.cardTitle}
                </Typography>
                <TextField
                    className={classes.card_inputFiled}
                    id="standard--flexible"
                    variant="outlined"
                    onChange={() => { }}
                    size="small"
                    fullWidth
                    placeholder={props.cardInputPlaceHolder}
                />
                <FormControlLabel
                    labelPlacement="start"
                    label="Save as Private"
                    control={<Switch checked={checked} onChange={toggleChecked} />}

                />
            </CardContent>
            <CardActions style={{ marginLeft: 50 }}>
                <Button
                    style={{
                        textAlign: "center",
                        font: "normal normal medium 16px/30px Poppins",
                        borderRadius: 5,
                    }}
                    variant="contained"
                    color="primary">{props.cardButton}</Button>
            </CardActions>
        </Card>
    );
}
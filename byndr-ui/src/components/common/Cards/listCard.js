import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #E8E8E8",
        borderRadius: 10
    },
    cardTtitle: {
        textAlign: "center",
        font: "normal normal 600 20px/30px Poppins",
        color: "#000000",
        opacity: 1,
    },
    cardSubText: {
        textAlign: "center",
        font: "normal normal normal 14px/30px Poppins",
        color: "#7D7D7D",
        opacity: 1
    }
}));

export default function ListCard() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List dense className={classes.root}>
            {[0].map((value) => {
                return (
                    <ListItem key={value}>
                        <ListItemAvatar>
                            <Avatar
                                alt="Travis Howard"
                                src="/static/images/avatar/2.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText>
                            <Grid item xs={12}>
                                <Grid container justify="flex-start" spacing={2}>
                                    <Grid item xs={6}>
                                        <Typography variant="body2" className={classes.cardTtitle} component="p">
                                            Rathish R
                                        </Typography>
                                        <Typography variant="body2" className={classes.cardSubText} component="p">
                                            24 Mutual
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant="body2" className={classes.cardTtitle} component="p">
                                            202k
                                        </Typography>
                                        <Typography variant="body2" className={classes.cardSubText} component="p">
                                            Followers
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <Grid item xs={12}>
                                <Grid container justify="center" spacing={2}>
                                    <Grid item>
                                        <Checkbox
                                            edge="end"
                                            onChange={handleToggle(value)}
                                            checked={checked.indexOf(value) !== -1}
                                            color="primary"
                                        />
                                    </Grid>
                                    <Grid item style={{ padding: 15 }}>
                                        <CloseOutlinedIcon
                                            color="primary"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>


                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}
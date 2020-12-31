import {
  Grid,
  makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import Shell from "../../common/shell";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  input_grid: {
    borderTop: "1px solid lightgray",
    marginTop: 20,
    paddingTop: 20,
    paddingLeft: 25,
  },
  mainTitle: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  accountType: {
    flexGrow: 1,
  },
  accountTypeWidth: {
    width: 200,
  },
}));

export default function NotificationSettings(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.mainTitle}>
          Push Notifications
        </Typography>
        <Typography>Changes saved</Typography>
      </Toolbar>
      <Grid container direction="column">
        <Grid container className={classes.input_grid}>
          <Grid item xs={12} sm={4}>
            <Toolbar>
              <Typography className={classes.title}>Likes from</Typography>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={10}
                className={classes.accountTypeWidth}
                onChange={() => {}}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>People I follow</MenuItem>
                <MenuItem value={20}>Friends</MenuItem>
              </Select>
            </Toolbar>
            <Toolbar style={{ flexGrow: 1 }}>
              <Typography className={classes.title}>Comments from</Typography>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={10}
                className={classes.accountTypeWidth}
                onChange={() => {}}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Everyone</MenuItem>
              </Select>
            </Toolbar>
            <Toolbar>
              <Typography className={classes.title}>Comment Likes</Typography>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={10}
                className={classes.accountTypeWidth}
                onChange={() => {}}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>None</MenuItem>
              </Select>
            </Toolbar>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Toolbar>
              <Typography className={classes.title}>Follow Requests</Typography>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={10}
                className={classes.accountTypeWidth}
                onChange={() => {}}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Everyone</MenuItem>
              </Select>
            </Toolbar>
            <Toolbar>
              <Typography className={classes.title}>
                Broadcast Reminders
              </Typography>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={10}
                className={classes.accountTypeWidth}
                onChange={() => {}}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>People I follow</MenuItem>
              </Select>
            </Toolbar>
            <Toolbar>
              <Typography className={classes.title}>
                Research Invites
              </Typography>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={10}
                className={classes.accountTypeWidth}
                onChange={() => {}}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Yes</MenuItem>
              </Select>
            </Toolbar>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

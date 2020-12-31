import {
  Avatar,
  Button,
  FormControl,
  Grid,
  Icon,
  makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import Shell from "../../common/shell";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainTitle: {
    marginRight: theme.spacing(2),
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
  m_rt: {
    marginRight: theme.spacing(2),
  },
  input_grid: {
    borderTop: "1px solid lightgray",
    marginTop: 20,
    paddingTop: 20,
    paddingLeft: 25,
  },
}));
export default function Privacy(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar variant="dense">
        <Typography className={classes.mainTitle}>Account Privacy</Typography>
        <FormControl variant="outlined" className={classes.accountType}>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={10}
            className={classes.accountTypeWidth}
            onChange={() => {}}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Private Account</MenuItem>
            <MenuItem value={20}>Public Account</MenuItem>
          </Select>
        </FormControl>
        <Typography>Changes Saved</Typography>
      </Toolbar>
      <Grid container direction="column">
        <Grid container className={classes.input_grid}>
          <Grid container>
            <Typography variant="h6" gutterBottom style={{ marginLeft: 20 }}>
              Visibility
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Toolbar>
              <Typography className={classes.title}>Profile Picture</Typography>
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
                <MenuItem value={20}>Friends</MenuItem>
              </Select>
            </Toolbar>
            <Toolbar style={{ flexGrow: 1 }}>
              <Typography className={classes.title}>Date of Birth</Typography>
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
                <MenuItem value={10}>Hide</MenuItem>
              </Select>
            </Toolbar>
            <Toolbar>
              <Typography className={classes.title}>Phone</Typography>
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
                <MenuItem value={10}>Hide</MenuItem>
              </Select>
            </Toolbar>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Toolbar>
              <Typography className={classes.title}>Location</Typography>
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
              <Typography className={classes.title}>Email ID</Typography>
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
                <MenuItem value={10}>Hide</MenuItem>
              </Select>
            </Toolbar>
            <Toolbar>
              <Typography className={classes.title}>My Connections</Typography>
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
                <MenuItem value={10}>Display to Followers</MenuItem>
              </Select>
            </Toolbar>
          </Grid>
        </Grid>
        <Grid container className={classes.input_grid}>
          <Grid container>
            <Typography variant="h6" gutterBottom style={{ marginLeft: 20 }}>
              Site Preferences
            </Typography>
            <Grid container direction="column">
              <Typography style={{ marginLeft: 20 }}>
                Auto Play videos on your feed
              </Typography>
              <Toolbar>
                <Button variant="outlined" className={classes.m_rt}>
                  Always
                </Button>
                <Button variant="outlined" className={classes.m_rt}>
                  Never
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.m_rt}
                >
                  {" "}
                  On WiFi only
                </Button>
              </Toolbar>
              <Typography style={{ marginLeft: 20 }}>
                Show 'Viewers of this profile also viewed'
              </Typography>
              <Toolbar>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.m_rt}
                >
                  Always
                </Button>
                <Button variant="outlined" className={classes.m_rt}>
                  Never
                </Button>
              </Toolbar>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="column" className={classes.input_grid}>
          <Typography variant="h6" gutterBottom style={{ marginLeft: 20 }}>
            Blocked Users 4 <ExpandLessIcon />
          </Typography>
          <Grid container direction="row" style={{ marginLeft: 20 }}>
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                border: "1px solid lightgray",
                borderRadius: 5,
                margin: "5px 10px 5px 0px",
              }}
            >
              <Toolbar>
                <Avatar className={classes.m_rt}></Avatar>
                <Grid container direction="column">
                  <Typography style={{ fontWeight: "bold" }}>
                    Rathish R
                  </Typography>
                  <Typography style={{ fontSize: 12 }}>24 Mutual</Typography>
                </Grid>
                <Grid container direction="column">
                  <Typography style={{ fontWeight: "bold" }}>202k</Typography>
                  <Typography style={{ fontSize: 12 }}>Followers</Typography>
                </Grid>
                <Grid container direction="column">
                  <Button variant="outlined" color="primary">
                    Unblock
                  </Button>
                </Grid>
              </Toolbar>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                border: "1px solid lightgray",
                borderRadius: 5,
                margin: "5px 10px 5px 0px",
              }}
            >
              <Toolbar>
                <Avatar className={classes.m_rt}></Avatar>
                <Grid container direction="column">
                  <Typography style={{ fontWeight: "bold" }}>
                    Rathish R
                  </Typography>
                  <Typography style={{ fontSize: 12 }}>24 Mutual</Typography>
                </Grid>
                <Grid container direction="column">
                  <Typography style={{ fontWeight: "bold" }}>202k</Typography>
                  <Typography style={{ fontSize: 12 }}>Followers</Typography>
                </Grid>
                <Grid container direction="column">
                  <Button variant="outlined" color="primary">
                    Unblock
                  </Button>
                </Grid>
              </Toolbar>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                border: "1px solid lightgray",
                borderRadius: 5,
                margin: "5px 10px 5px 0px",
              }}
            >
              <Toolbar>
                <Avatar className={classes.m_rt}></Avatar>
                <Grid container direction="column">
                  <Typography style={{ fontWeight: "bold" }}>
                    Rathish R
                  </Typography>
                  <Typography style={{ fontSize: 12 }}>24 Mutual</Typography>
                </Grid>
                <Grid container direction="column">
                  <Typography style={{ fontWeight: "bold" }}>202k</Typography>
                  <Typography style={{ fontSize: 12 }}>Followers</Typography>
                </Grid>
                <Grid container direction="column">
                  <Button variant="outlined" color="primary">
                    Unblock
                  </Button>
                </Grid>
              </Toolbar>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                border: "1px solid lightgray",
                borderRadius: 5,
                margin: "5px 10px 5px 0px",
              }}
            >
              <Toolbar>
                <Avatar className={classes.m_rt}></Avatar>
                <Grid container direction="column">
                  <Typography style={{ fontWeight: "bold" }}>
                    Rathish R
                  </Typography>
                  <Typography style={{ fontSize: 12 }}>24 Mutual</Typography>
                </Grid>
                <Grid container direction="column">
                  <Typography style={{ fontWeight: "bold" }}>202k</Typography>
                  <Typography style={{ fontSize: 12 }}>Followers</Typography>
                </Grid>
                <Grid container direction="column">
                  <Button variant="outlined" color="primary">
                    Unblock
                  </Button>
                </Grid>
              </Toolbar>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column" className={classes.input_grid}>
        <Typography variant="h6" style={{ marginLeft: 20 }}>
          Account Management
        </Typography>
        <Toolbar>
          <Button className={classes.m_rt} variant="contained" color="primary">
            Temporarily Disable My Account
          </Button>
          <Button variant="outlined" color="primary">
            Permanently Delete My Account
          </Button>
        </Toolbar>
      </Grid>
      <Grid container direction="column" className={classes.input_grid}>
        <Typography variant="h6" style={{ marginLeft: 20 }}>
          Data Download
        </Typography>
        <Toolbar>
          <Button variant="outlined" color="primary">
            Request to Download
          </Button>
        </Toolbar>
      </Grid>
    </div>
  );
}

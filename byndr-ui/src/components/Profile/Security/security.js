import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  makeStyles,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import React from "react";
import Shell from "../../common/shell";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  input_grid: {
    borderTop: "1px solid lightgray",
    marginTop: 20,
    paddingLeft: 25,
  },
  txtFields: {
    width: 350,
    marginRight: 15,
  },
  title: {
    marginRight: theme.spacing(2),
  },
  accountType: {
    flexGrow: 1,
  },
  accountTypeWidth: {
    width: 200,
  },
}));

export default function Security(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar variant="dense">
        <Typography className={classes.title}>Account Privacy</Typography>
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
        <Grid container direction="column" className={classes.input_grid}>
          <div style={{ marginTop: 20 }}>
            <Typography color="inherit" gutterBottom variant="body1">
              Email
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <TextField
                className={classes.txtFields}
                id="standard--flexible"
                variant="outlined"
                onChange={() => {}}
                size="small"
                placeholder="Enter Email Address"
              />
              <Button color="primary" variant="outlined">
                Update
              </Button>
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <Typography color="inherit" gutterBottom variant="body1">
              Phone
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <TextField
                className={classes.txtFields}
                id="standard--flexible"
                variant="outlined"
                onChange={() => {}}
                size="small"
                placeholder="Enter Phone"
              />
              <Button color="primary" variant="outlined">
                Update
              </Button>
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <Typography color="inherit" gutterBottom variant="body1">
              Change Password
            </Typography>
            <OutlinedInput
              className={classes.txtFields}
              id="standard--flexible"
              variant="outlined"
              onChange={() => {}}
              size="small"
              placeholder="Type Current Password"
              endAdornment={
                <InputAdornment position="end">
                  <Visibility />
                </InputAdornment>
              }
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                marginTop: 20,
              }}
            >
              <OutlinedInput
                className={classes.txtFields}
                id="standard--flexible"
                variant="outlined"
                onChange={() => {}}
                size="small"
                placeholder="Type New Password"
                endAdornment={
                  <InputAdornment position="end">
                    <Visibility />
                  </InputAdornment>
                }
              />
              <OutlinedInput
                className={classes.txtFields}
                id="standard--flexible"
                variant="outlined"
                onChange={() => {}}
                size="small"
                placeholder="Confirm New Password"
                endAdornment={
                  <InputAdornment position="end">
                    <Visibility />
                  </InputAdornment>
                }
              />
              <Button color="primary" variant="outlined">
                Save Changes
              </Button>
            </div>
          </div>
        </Grid>
        <Grid container className={classes.input_grid} direction="column">
          <Grid
            style={{ marginTop: 20 }}
            container
            direction="row"
            alignItems="center"
          >
            <Typography style={{ marginRight: 30 }}>My Devices</Typography>
            <Typography variant="h6" color="primary">
              2 Active
            </Typography>
          </Grid>
          <Grid container direction="row">
            <Grid
              container
              direction="column"
              style={{
                padding: "5px 10px",
                borderRadius: 5,
                border: "1px solid lightgray",
                width: 300,
                marginRight: 20,
              }}
            >
              <Typography>Mac</Typography>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Typography>Telangana, India</Typography>
                <Typography color="primary" style={{ fontSize: 12 }}>
                  This Device
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              style={{
                padding: "5px 10px",
                borderRadius: 5,
                border: "1px solid lightgray",
                width: 300,
                marginRight: 20,
              }}
            >
              <Typography>Redmi Note Pro</Typography>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Typography>Telangana, India</Typography>
                <Typography color="primary" style={{ fontSize: 12 }}>
                  Sign Out
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          className={classes.input_grid}
          style={{ paddingTop: 20 }}
        >
          <Typography>Two-Step Verification</Typography>
          <Grid container direction="row" style={{ paddingTop: 15 }}>
            <Button
              style={{ marginRight: 20 }}
              variant="contained"
              color="primary"
            >
              On
            </Button>
            <Button variant="outlined" color="primary">
              Off
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.input_grid}
          direction="row"
          alignItems="center"
          style={{ paddingTop: 20 }}
        >
          <Typography style={{ marginRight: 20 }}>
            Device that remember your password
          </Typography>
          <Typography variant="h6" color="primary">
            Details
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

import {
  Avatar,
  Button,
  Chip,
  Grid,
  makeStyles,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import Shell from "../common/shell";
import grey from "@material-ui/core/colors/grey";

const useClasses = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  title_space: {
    marginRight: theme.spacing(2),
  },
  header_toolbar: {
    backgroundColor: "#FFFFFF",
    flexGrow: 1,
    marginBottom: theme.spacing(4),
  },
  text_margin: {
    margin: `${theme.spacing(1)}px 0px`,
  },
  margin_right: {
    marginRight: theme.spacing(2),
  },
  chip_margin: {
    margin: theme.spacing(1),
  },
  sub_heading: {
    fontSize: 14,
    color: grey[600],
  },
}));

export default function Home(props) {
  const classes = useClasses();
  return (
    <div className={classes.root}>
      <Grid container>
        <Toolbar className={classes.header_toolbar}>
          <Typography
            variant="h6"
            color="primary"
            className={classes.title_space}
          >
            Hey there! Welcome to Byndr.
          </Typography>
          <Typography>Help Us build your account.</Typography>
        </Toolbar>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} style={{ padding: 20 }}>
            <div
              style={{
                borderRadius: 10,
                backgroundColor: "white",
                padding: 20,
              }}
            >
              <Typography variant="h6"> What should we call you?</Typography>
              <Typography className={classes.sub_heading}>
                Give yourself a name and help us know you better.
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Enter First Name"
                fullWidth
                size="small"
                className={classes.text_margin}
              ></TextField>
              <TextField
                variant="outlined"
                placeholder="Enter Last Name"
                className={classes.text_margin}
                fullWidth
                size="small"
              ></TextField>
              <TextField
                variant="outlined"
                placeholder="Your Custom Status"
                className={classes.text_margin}
                fullWidth
                size="small"
              ></TextField>
              <Toolbar style={{ justifyContent: "space-between" }}>
                <Button variant="contained" color="primary">
                  Save
                </Button>
                <Button variant="outlined" color="primary">
                  + Complete Profile Setup
                </Button>
              </Toolbar>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            style={{
              padding: 20,
            }}
          >
            <div
              style={{
                borderRadius: 10,
                backgroundColor: "white",
                padding: 20,
              }}
            >
              <Typography variant="h6">
                Select your areas of interest.
              </Typography>
              <Typography className={classes.sub_heading}>
                This would help in bulding your topics, feeds and people
                suggestions.
              </Typography>
              <div className={classes.text_margin}>
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Thermodynamics"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Design Thinking"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Pedagogy"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Python"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Design Thinking"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Biotechnology"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Digital Marketing"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Data Analytics"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Pandemic"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Data Analytics"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Colour Theory"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Wireframing"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Space Tech"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Current Affairs"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Wireframing"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  label="Artificial Intelligence"
                  avatar={<Avatar>F</Avatar>}
                  className={classes.chip_margin}
                />
              </div>
              <Toolbar>
                <Button
                  className={classes.margin_right}
                  variant="contained"
                  color="primary"
                >
                  Done
                </Button>
                <Button variant="outlined" color="primary">
                  Show More
                </Button>
              </Toolbar>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

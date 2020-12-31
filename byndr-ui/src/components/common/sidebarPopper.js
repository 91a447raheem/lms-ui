import {
  Button,
  ClickAwayListener,
  Grid,
  makeStyles,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  popper: {
    zIndex: 1000,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "1em 1em 0 1em",
        borderColor: `${theme.palette.background.paper} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 1em 1em 0",
        borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 0 1em 1em",
        borderColor: `transparent transparent transparent ${theme.palette.background.paper}`,
      },
    },
  },
  arrow: {
    position: "absolute",
    fontSize: 7,
    width: "3em",
    height: "3em",
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid",
    },
    paper: {
      width: 400,
      overflow: "auto",
    },
  },
  content: {
    fontSize: 14,
    color: "grey",
    marginBottom: 10,
  },
}));

export default function SidebarPopper({
  popoverOpen,
  setPopoverOpen,
  arrow,
  anchorRef,
  title,
  content,
}) {
  const [arrowRef, setArrowRef] = React.useState(null);
  const classes = useStyles();
  return (
    <Popper
      id={"scroll-playground"}
      open={popoverOpen}
      anchorEl={anchorRef.current}
      placement={"right"}
      disablePortal={true}
      className={classes.popper}
      modifiers={{
        flip: {
          enabled: true,
        },
        preventOverflow: {
          enabled: false,
          boundariesElement: "scrollParent",
        },
        arrow: {
          enabled: true,
          element: arrowRef,
        },
      }}
    >
      <span className={classes.arrow} ref={setArrowRef} />
      <ClickAwayListener onClickAway={(e) => setPopoverOpen(false)}>
        <Paper className={classes.paper}>
          <Grid
            container
            direction="column"
            style={{ padding: 20, width: 300 }}
          >
            <Typography gutterBottom variant="h6" color="primary">
              {title}
            </Typography>
            <Typography className={classes.content} gutterBottom>
              {content}
            </Typography>
            <Grid container direction="row" justify="space-between">
              <Button variant="contained" color="primary">
                Explore
              </Button>
              <Button variant="outlined" color="default">
                Skip
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
}

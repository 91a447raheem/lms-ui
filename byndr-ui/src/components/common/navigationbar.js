import React from 'react';
import { fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Select from "react-select";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: 'black',
        marginLeft: `calc(1.5em + ${theme.spacing(4)}px)`,
        marginRight: `calc(7em + ${theme.spacing(2)}px)`
        
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(0),
        marginLeft: 0,
        width: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1.5),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'lightgrey'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    select:{
 
    padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
    transition: theme.transitions.create('width'),
    width: 'auto',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    }
}));

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const customStyles = {
    option: (base, state) => ({
        ...base,
        color: state.isSelected ? 'black' : 'black',
        ':active': {
          color: state.isSelected ? 'black' : 'black'
        }
      }),
    control: (base, state) => ({
      ...base,
      background: "#F8F8F8",
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "blue" : "#F8F8F8",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
        // width 
      width: "auto !important",

      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "red" : "blue"
      }
    }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0
    }),
    menuList: base => ({
      ...base,
      // kill the white space on first and last option
      padding: 0
    }),
    
  };


export default function Navigationbar() {

    const classes = useStyles();


    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: 'white', color: 'grey' }}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Latest Uploads
                    </Typography>
                    <div className={classes.search} >

                        <div className={classes.searchIcon}>
                            Show
                        </div>

                        <div  className={classes.select} >
                            <Select
                                defaultValue={options[0]}
                                options={options}
                                styles={customStyles}
                                autosize={true}
                                theme={theme => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                      ...theme.colors,
                                      primary: 'lightgrey',
                                      primary25: '#F8F8F8',

                                    },
                                  })}
                                  components={{
                                    IndicatorSeparator: () => null
                                  }}
                                  
                            />
                        </div>
                    </div>

                    <div className={classes.search} >
                        <div className={classes.searchIcon}>
                            Sort By
                        </div>

                        <div  className={classes.select}>
                            <Select
                                defaultValue={options[0]}
                                options={options}
                                styles={customStyles}
                                autosize={true}
                                theme={theme => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                      ...theme.colors,
                                      primary: 'lightgrey',
                                      primary25: '#F8F8F8',

                                    },
                                  })}
                                  components={{
                                    IndicatorSeparator: () => null
                                  }}
                                  
                            />
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
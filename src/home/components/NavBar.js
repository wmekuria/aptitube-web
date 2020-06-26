import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import navBarData from '../data/navBar.json'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary.dark,
    padding:0,
    minHeight:50
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  login:{
    flexGrow: 1,
    height:50,
    background: theme.palette.primary.main,
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    textAlign: 'center',
    borderRadius: 0  
  },
  signup:{
    flexGrow: 1,
    height:50,
    background: theme.palette.primary.dark,
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightLight,
    textTransform: 'uppercase',
    textAlign: 'center',
    borderRadius: 0  
  },
  logo:{
    flexGrow: 1,
    height:50,
    background: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightLight,
    textTransform: 'uppercase',
    textAlign: 'center',
    borderRadius: 0  
  },
  menu: {
    flexGrow: 1,
    height:50,
    background: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    fontWeight: theme.typography.fontWeightLight,
    textTransform: 'uppercase',
    textAlign: 'center',
    borderRadius: 0
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: 35,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const logoBtn = navBarData.logo
  const menuBtns = navBarData.menuBtns
  const rightBtns = navBarData.rightBtns

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.root}>
            <Button className={classes.logo}>
                <Typography >
                    {logoBtn.text}
                </Typography>
            </Button>
            {menuBtns.map((menuBtn)=>(
                <Button className={classes.menu}>
                    <Typography >
                        {menuBtn.text}
                    </Typography>
                </Button>
            ))}
                      <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.right}/>
                {rightBtns.map((rightBtn)=>(
                    <Button className={classes[rightBtn.style]}>
                        <Typography >
                            {rightBtn.text}
                        </Typography>
                    </Button>
                ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
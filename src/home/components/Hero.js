import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Container} from '@material-ui/core';
const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';
const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.common.white,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '80vh',
        minHeight: 100,
        maxHeight: 260,
        [theme.breakpoints.up('sm')]: {
          height: '80vh',
          minHeight: 500,
          maxHeight: 1300,
        }
      },
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(14),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
    },
    backgroundClassName:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      zIndex: -2,
      backgroundImage: `url(${backgroundImage})`,
      backgroundColor: '#7fc7d9', // Average color of the background image.
      backgroundPosition: 'center'
    },
    backdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.5,
      zIndex: -1,
    },
  
    }));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
        <Container>
          <div className={classes.backdrop} />
          <div className={classes.backgroundClassName} />
          <Typography color="inherit" align="center" variant="h2" marked="center">
            BAILÁ
          </Typography>
        </Container>
    </section>
  );
}
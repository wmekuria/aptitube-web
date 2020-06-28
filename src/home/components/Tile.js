import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: { 
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 0
        },
    content: { 
        padding: 0,
         '&:last-child': { padding: 0 } },
    img: {
        width: 'initial',
        minWidth: 'initial',
        maxWidth: '42em',
        maxHeight: '15em',
    },
    paper: {
        height: 280,
        width: 280,
      },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
        height:280,
        width:280,
    },
}));

const Tile = ({ record }) => {
    const spacing = 8
    const classes = useStyles();
    return (
        <React.Fragment>
        <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2].map((value) => (
            <Grid key={value} item>
                <div className={classes.item}>
                    <img src='https://source.unsplash.com/random' alt="" className={classes.img} />
                </div>
            </Grid>
            ))}
        </Grid>
        {/* <Card className={classes.root}>
            <CardContent className={classes.content}>
                <img src='https://source.unsplash.com/random' alt="" className={classes.img} />
            </CardContent>
        </Card> */}
        </React.Fragment>
    );
};

export default Tile;
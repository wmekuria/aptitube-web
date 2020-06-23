import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
});

const Tile = ({ record }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <img src='https://source.unsplash.com/random' alt="" className={classes.img} />
            </CardContent>
        </Card>
    );
};

export default Tile;
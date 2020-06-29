import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
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
        width: "100%",
        height: "100%",
    },
    paper: {
        height: 280,
        width: 280,
      },
    header:{
        background: theme.palette.primary.dark,
        color: theme.palette.primary.light,
        textTransform: 'uppercase',
        textAlign: 'center',
        borderRadius: 0 ,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        height:65,
        width:230,
      }
}));

const Tile = ({ record }) => {
    const spacing = 8
    const classes = useStyles();
    return (
        <Container className={classes.root} component="section">
            <Button className={classes.header}>
                <Typography align="left" variant="h5" marked="center">
                    TEACHERS
                </Typography>
            </Button>
            <Grid container spacing={spacing}>
                {[0, 1, 2, 3, 4, 5].map((value) => (
                <Grid key={value} item xs={6} sm={4} md={4}>
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
        </Container>
    );
};

export default Tile;
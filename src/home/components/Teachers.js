import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    alignItem: "center"
  },
  gridList: {
    width: "100%",
    height: "100%",
    
  },
  title: {
    color: "#FE3939",
    
  },
  card:{
    borderRadius: 0,
  },
  searchBar: {
    background: "#FFFFFF",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#FE3939",
    margin: "12px",
    width: "348px"
  },
  fontColor: {
    color: "#FE3939",
    marginLeft: "10px",
    fontWeight: "bold"
  },
  header:{
    display: 'flex',
    background: theme.palette.primary.main,
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    textAlign: 'center',
    borderRadius: 0  ,
    justifyContent: 'flex-start',
    height:65,
    width:230
  }
}));

const tileData = [
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Chinese_-_Wine_Pot_-_Walters_44569_-_Side_%28cropped%29.jpg/1024px-Chinese_-_Wine_Pot_-_Walters_44569_-_Side_%28cropped%29.jpg",
    title: "Decorative arts and crafts"
  },
  {
    img: "https://www.metmuseum.org/toah/images/hb/hb_24.60.jpg",
    title: "American Impressionism"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Tableau_I%2C_by_Piet_Mondriaan.jpg/1024px-Tableau_I%2C_by_Piet_Mondriaan.jpg",
    title: "De Stijl"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Pablo_Picasso%2C_1910%2C_Girl_with_a_Mandolin_%28Fanny_Tellier%29%2C_oil_on_canvas%2C_100.3_x_73.6_cm%2C_Museum_of_Modern_Art_New_York..jpg/800px-Pablo_Picasso%2C_1910%2C_Girl_with_a_Mandolin_%28Fanny_Tellier%29%2C_oil_on_canvas%2C_100.3_x_73.6_cm%2C_Museum_of_Modern_Art_New_York..jpg",
    title: "Cubism"
  },
  {
    img:
      "https://img.artrabbit.com/events/faces-of-the-american-west-portraits-of-the-cowboy-and-the-native-american-photo-workshop/images/aBYYTNEuBZr0/1180x836/Sadie-Lombardi-Craig-Varjabedian.webp",
    title: "American Photography"
  },
  {
    img:
      "https://i.pinimg.com/236x/3f/e9/e8/3fe9e8c2d2ca86fd65a8135f696cf72c.jpg",
    title: "Greek Antiques"
  }
];

function Collections(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.header}>
        <Typography align="center" variant="h5" marked="center" className={classes.header}>
              TEACHERS
        </Typography>
      </Button>

      <GridList 
        container 
        spacing={0} 
        className={classes.gridList} 
       
        >
        {tileData.map(tile => (
          <GridListTile key={tile.title}  xs={12} sm={6} md={4} lg={4} xl={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  style={{ minHeight: 500 }}
                  image={tile.img}
                  title={tile.title}
                />
              </CardActionArea>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Collections;

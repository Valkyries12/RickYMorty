import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: "200px",
    maxWidth: "200px",
    backgroundColor: "transparent",
    boxShadow: "0 5px 15px 0 hsla(0,0%,100%,.4)",
    textShadow: "0.5px 0 0 #ea36af, -1px 0 0 #75fa69",
  },
  media: {
    height: "150px",
    width: "150px",
    borderRadius: "50%"
  },
  cardActionArea: {
    alignContent: "center",
    display: "flex",
    flexDirection: "column",
    padding: "2px",
  },
  cardContent: {
    borderRadius: "6px",
    width: "85%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4px 15px"
  },
  name: {
    color: "#E134A8"
  },
  info: {
    color: "#461034"
  }
});

const CharacterCard = ({ characterInfo }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia
          className={classes.media}
          image={`${characterInfo.image}`}
          title={`${characterInfo.name}`}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2" className={classes.name}>
            {`${characterInfo.name}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.info}>
            {`${characterInfo.species}`}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}

export default CharacterCard;